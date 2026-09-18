const {
    REST,
    Routes,
    SlashCommandBuilder
} = require("discord.js");

const commands = [
    new SlashCommandBuilder()
        .setName("botmsg")
        .setDescription("Make the bot send a message")
        .addStringOption(option =>
            option
                .setName("msg")
                .setDescription("The message to send")
                .setRequired(true)
        )
].map(command => command.toJSON());

const rest = new REST({ version: "10" })
    .setToken(process.env.DISCORD_TOKEN);

rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
)
.then(() => console.log("Successfully registered commands."))
.catch(console.error);