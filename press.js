// Load the node-switchbot and get a `Switchbot` constructor object
const Switchbot = require('node-switchbot');
// Create an `Switchbot` object
const switchbot = new Switchbot();

(async () => {
  // Find a Bot (WoHand)
  const bot_list = await switchbot.discover({ model: 'H'});
  if (bot_list.length === 0) {
    throw new Error('No device was found.');
  }
  // The `SwitchbotDeviceWoHand` object representing the found Bot.
  let device = bot_list[0];
  // Press the Bot's arm
  await device.press();

  process.exit();
})();
