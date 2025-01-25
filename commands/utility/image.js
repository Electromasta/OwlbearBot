const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('img')
		.setDescription('Embed an Image from a Search')
    .addStringOption(option => option
      .setName('term')
      .setDescription('The Term to Search on')
      .setRequired(true)),
	async execute(interaction) {
    const term = interaction.options.getString('term') ?? 'No Term Provided';
    console.log(term);

    let error = false;
    let reply = "No results found, hoot-hoot";

		await interaction.reply(reply);
	},
};
