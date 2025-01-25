const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a set of dice using Dice Notation adx+y')
    .addStringOption(option => option
      .setName('dice')
      .setDescription('The Dice to Roll')
      .setRequired(true)),
	async execute(interaction) {
    const dicestring = interaction.options.getString('dice') ?? 'No Dice Provided';
    console.log(interaction.options.getString('dice'));

    let error = false;
    let reply = "At least one Term is not a number, hoot-hoot";
    let terms = dicestring.split(/d(.*?)\+/);

    if (terms.length !== 3) { error = true; }
    for (let term of terms) { if (isNaN(term)) { error = true; console.log("isNaN"); } }
    if (terms[1] > 100) { error = true; reply = "Dice can't be larger than 100, hoot-hoot"; }
    if ((terms[0] * terms[2]) > 251) { error = true; reply = "That's too scary, hoot-hoot"; }

    if (!error) {
      let result = 0;
      let diceresults = Array(terms[0]);
      reply = "Rolling: " + terms[0] + "d" + terms[1] + "+" + terms[2] + " => ";
      
      for (let i=0; i<terms[0]; i++)  {
        diceresults[i] = terms[1];
      }

      reply = reply.concat("[ ")
      for (let [i, dice] of diceresults.entries()) {
        let d = ((Math.floor(Math.random() * Number(terms[1])) + 1));
        console.log(d);
        result += d;
        reply = reply.concat(d);
        if (i+1 !== diceresults.length) { reply = reply.concat(", "); }
      }
      result += Number(terms[2]);
      reply = reply.concat(" ]");

      reply = reply.concat(" +" + terms[2] + " = " + result);
    }

		await interaction.reply(reply);
	},
};
