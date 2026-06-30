// Single source of truth for hardware targets. Used by both the Devices section
// (info display) and the Flasher (manifest selection). The `env` values match
// the [env:*] names in plumeria-mc/platformio.ini.
export const DEVICES = [
  {
    env: 'cardputer-cap',
    name: 'M5Stack Cardputer + Cap LoRa/GPS',
    chip: 'ESP32-S3',
    desc: 'Default target. Keyboard-driven nav, microSD config, GPS, full standalone mesh UI. Pairs with the M5Stack Cap LoRa/GPS module.',
    link: 'https://shop.m5stack.com/products/m5stack-cardputer-kit-w-m5stamps3',
    image: '/devices/cardputer-cap.png',
  },
  {
    env: 'tlora-pager-tft',
    name: 'LilyGo T-Lora Pager TFT',
    chip: 'ESP32-S3',
    desc: 'SX1262 LoRa, 480×222 TFT, physical keyboard, roller wheel + click, GPS. Full standalone mesh UI with microSD config import/export.',
    link: 'https://lilygo.cc/',
    image: '/devices/tlora-pager-tft.png',
  },
  {
    env: 'tdeck',
    name: 'LilyGo T-Deck',
    chip: 'ESP32-S3',
    desc: 'SX1262 LoRa, 320×240 display, physical keyboard, trackball, L76K GPS. Board, radio, display, and basic trackball input wired.',
    link: 'https://www.lilygo.cc/products/t-deck',
    image: '/devices/tdeck.png',
  },
  {
    env: 'heltec-v4-expansion',
    name: 'Heltec WiFi LoRa 32 V4 + TFT',
    chip: 'ESP32-S3',
    desc: 'Touch-first horizontal UI with the expansion TFT, GPS, full standalone mesh UI.',
    link: 'https://heltec.org/',
    image: '/devices/heltec-v4-expansion-kit.png',
  },
  {
    env: 'heltec-v4-expansion-vertical',
    name: 'Heltec WiFi LoRa 32 V4 + TFT (vertical)',
    chip: 'ESP32-S3',
    desc: 'Same as Heltec V4 expansion with a vertical-oriented, compact UI layout.',
    link: 'https://heltec.org/',
    image: '/devices/heltec-v4-expansion-kit.png',
  },
]
