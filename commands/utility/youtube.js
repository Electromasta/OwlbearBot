const { SlashCommandBuilder } = require('discord.js');
const youtube = require("youtube-sr").default;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yt')
		.setDescription('Embed a video from youtube')
    .addStringOption(option => option
      .setName('term')
      .setDescription('The Term to Search on')
      .setRequired(true)),
	async execute(interaction) {
    const term = interaction.options.getString('term') ?? 'No Term Provided';
    console.log("/yt" + term);

    let error = false;
    let reply = "No results found, hoot-hoot";

    youtube.search(term, { limit: 1 })
      .then((x) => interaction.reply('Youtube Results for ' + term + ': ' + 'https://www.youtube.com/watch?v=' + x[0].id))
      .catch(console.error)
	},
};
