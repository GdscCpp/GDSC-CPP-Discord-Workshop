// Run this every time you add a new command

const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    //name: "name",
    //description: "what the command does"
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.CLIENT_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
