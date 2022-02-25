const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('./server');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prune')
        .setDescription('Proune up to 99 messages')
        .addIntegerOption(option => option.setName('amout').setDescription('Number of messages to prune')),
    async execute(interaction){
        const amout = interaction.options.gerInteger('amout');

        if(amout <= 1 || amout > 100){
            return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true});
        }
        await interaction.channel.bulkDelete(amount, true).catch(error => {
            console.error(error);
            interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });           
        });

        return interaction.reply({ content: `Successfully pruned \`${amout}\` messages.`, ephemeral: true });
    },
};