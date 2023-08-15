const { Client, Events, GatewayIntentBits } = require("discord.js");

//import our commands
const ping = require("./ping");
const action = require("./actionRows");

//load env variables from directory above
require("dotenv").config({ path: "../.env" });

//intents represent our permissions, with the current one being
//the ability to access a Discord Server `guild`
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

//runs once the client is ready to begin processing events
client.on("ready", async () => {
  console.log("Discord Bot Online");
});

//runs every time an interaction occurs on a server
client.on(Events.InteractionCreate, (interaction) => {
  //chat commands
  if (interaction.isChatInputCommand()) {
    const command = interaction.client.commands.get(interaction.commandName);

    //cycle through possible commands
    switch (command) {
      //commands are placed in `template/commands.js` for readability
      case "ping":
        ping.execute(interaction);
        break;
      case "action":
        action.execute(interaction);
      //add your commands here!
      default:
        interaction.reply("Command not found");
        break;
    }
  }
  //button clicks
  else if (interaction.isButton()) {
    interaction.reply("You are awesome!");
  }
});

//authenticate our bot with Discord
client.login(process.env.CLIENT_TOKEN);
