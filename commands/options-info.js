const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('options-info')
        .setDescription('Information about the options provided.')
        .addStringOption(option => option.setName('input').setDescription('The input to echo back')),
    async execute(interaction) {
            const value = interaction.option.getString('input');
            if (value) return interaction.reply (`The options value is : \`${value}\``);
            return interaction.reply('no option was provided!');
        },
};