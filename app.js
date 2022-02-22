// discord bot link https://discord.com/api/oauth2/authorize?client_id=945130274927284234&permissions=448824596544&scope=bot

const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
	
	if(commandName === 'ping'){
		await interaction.reply('Pong!');
	} else if (commandName === 'server'){
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user'){
		await interaction.reply(`Your Usarname is: ${interaction.user.username}\nYour tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

// Login to Discord with client token
client.login(token);