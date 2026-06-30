#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-plumeria-mc-web:plumeria}"
CONTAINER_NAME="${CONTAINER_NAME:-plumeria-mc-web}"
HOST_PORT="${HOST_PORT:-10080}"
CONTAINER_PORT="${CONTAINER_PORT:-80}"
VITE_BASE_PATH="${VITE_BASE_PATH:-/plumeria/}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "[1/3] Building image: $IMAGE_NAME (VITE_BASE_PATH=$VITE_BASE_PATH)"
docker build --build-arg VITE_BASE_PATH="$VITE_BASE_PATH" -t "$IMAGE_NAME" .

if docker ps -a --format '{{.Names}}' | grep -qx "$CONTAINER_NAME"; then
  echo "[2/3] Replacing existing container: $CONTAINER_NAME"
  docker rm -f "$CONTAINER_NAME" >/dev/null
else
  echo "[2/3] No existing container named $CONTAINER_NAME found"
fi

echo "[3/3] Starting container on $HOST_PORT:$CONTAINER_PORT"
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "$HOST_PORT:$CONTAINER_PORT" \
  "$IMAGE_NAME" >/dev/null

echo "Update complete."
docker ps --filter "name=$CONTAINER_NAME" --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}'
