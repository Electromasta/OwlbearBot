const { SlashCommandBuilder } = require('discord.js');
const urban = require('urban');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ud')
		.setDescription('Embed a Link from Urban Dictionary')
    .addStringOption(option => option
      .setName('term')
      .setDescription('The Term to Search on')
      .setRequired(true)),
	async execute(interaction) {
    const term = interaction.options.getString('term') ?? 'No Term Provided';
    console.log("/ud " + term);

    let error = false;
    let reply = "No results found, hoot-hoot";

    await urban(term).first(async function(json) {
      interaction.reply("From Urban Dictionary, " + term + ": " + json.definition);

    });
	},
};
