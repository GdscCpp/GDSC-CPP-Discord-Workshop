const { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
  data:
    new SlashCommandBuilder()
      .setName("action")
      .setDescription("displays an action row"),
      async execute(interaction) {
        //create a button for our action row
        const confirm = new ButtonBuilder()
          .setCustomId("confirm")
          .setLabel("Confirm you are awesome!")
          .setStyle(ButtonStyle.Success);

        //create the row and add our button to it
        const row = new ActionRowBuilder().addComponents(confirm)

        //send the row to the user
        await interaction.reply({content:'Click here to confirm you are awesome', components:[row]})
      }
    

};
