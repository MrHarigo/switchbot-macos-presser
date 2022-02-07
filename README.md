# switchbot-macos-presser

Switchbot configuration/script for remote control from Mac.

## Dependencies

- Node.js 10 +
- [@abandonware/noble](https://github.com/abandonware/noble)
- [@node-switchbot](https://github.com/OpenWonderLabs/node-switchbot)

## Installation

Before the installation on newer versions of OSX, allow bluetooth access on the terminal app: "System Preferences" —> "Security & Privacy" —> "Bluetooth" -> Add terminal app

After that you can proceed with the installation:
```
npm install @abandonware/noble
npm install node-switchbot
```

## Usage

Now you can press the button on the doorbell by running the script with:
```
node press.js
```

## Enjoy :)
