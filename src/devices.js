// Single source of truth for hardware targets. Used by both the Devices section
// (info display) and the Flasher (manifest selection). The `env` values match
// the [env:*] names in plumeria-mc/platformio.ini.
const devicesBase = `${import.meta.env.BASE_URL}devices`

export const DEVICES = [
  {
    env: 'cardputer-cap',
    name: 'M5Stack Cardputer + Cap LoRa/GPS',
    chip: 'ESP32-S3',
    desc: 'Default target. Keyboard-driven nav, microSD config, GPS, full standalone mesh UI. Pairs with the M5Stack Cap LoRa/GPS module.',
    link: 'https://shop.m5stack.com/products/m5stack-cardputer-kit-w-m5stamps3',
    image: `${devicesBase}/cardputer-cap.png`,
  },
  {
    env: 'tlora-pager-tft',
    name: 'LilyGo T-Lora Pager TFT',
    chip: 'ESP32-S3',
    desc: 'SX1262 LoRa, 480×222 TFT, physical keyboard, roller wheel + click, GPS. Full standalone mesh UI with microSD config import/export.',
    link: 'https://lilygo.cc/',
    image: `${devicesBase}/tlora-pager-tft.png`,
  },
  {
    env: 'tdeck',
    name: 'LilyGo T-Deck',
    chip: 'ESP32-S3',
    desc: 'SX1262 LoRa, 320×240 display, physical keyboard, trackball, L76K GPS. Board, radio, display, and basic trackball input wired.',
    link: 'https://www.lilygo.cc/products/t-deck',
    image: `${devicesBase}/tdeck.png`,
  },
]
