const { SlashCommandBuilder } = require("discord.js");

//allow this command to be run from another file
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    //command code
    await interaction.reply("Pong!");
  },
};
