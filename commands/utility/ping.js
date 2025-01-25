const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with an Owlbear Cry!'),
	async execute(interaction) {
		await interaction.reply('SCKREEEEE!');
	},
};

