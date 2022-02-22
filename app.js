// discord bot link https://discord.com/api/oauth2/authorize?client_id=945130274927284234&permissions=448824596544&scope=bot

const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async Interaction => {
	if (!Interaction.isCommand()) return;

	const { commandName } = interaction;
	
	if(commandName === 'ping'){
		await interaction.reply('Pong!');
	} else if (commandName === 'server'){
		await interaction.reply('Server info');
	} else if (commandName === 'user'){
		await interaction.reply('User info');
	}
});

// Login to Discord with your client's token
client.login(token);