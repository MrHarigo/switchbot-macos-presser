// Load the node-switchbot
const Switchbot = require('node-switchbot');

(async () => {
  // Create an `Switchbot` object
  const switchbot = new Switchbot();
  let numberOfTries = 0;
  let success = false;
  while (numberOfTries < 3 && !success) {
    //Find a Bot (WoHand)
    const bot_list = await switchbot.discover({ model: 'H'});
    
    if (bot_list.length < 1) {
      console.log('No devices were found. Searching again ' + (3 - numberOfTries) + ' more time(s).')
      numberOfTries++;
    } else {
      // The `SwitchbotDeviceWoHand` object representing the found Bot.
      let device = bot_list[0];
      // Press the Bot's arm
      await device.press();
      success = true;
      console.log('Successfully pressed :)');
    }
  }
  if (!success) {
    console.log('Aborting.')
  }
  process.exit();
})();
