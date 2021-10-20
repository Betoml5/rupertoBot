const dotenv = require("dotenv");
dotenv.config();

const config = {
    discordToken: process.env.DISCORD_TOKEN,
    weatherToken: process.env.WEATHER_TOKEN,
    port: process.env.PORT
};

module.exports = { config };