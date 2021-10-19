const dotenv = require("dotenv");
dotenv.config();

const config = {
    discordToken: process.env.DISCORD_TOKEN,
    weatherToken: process.env.WEATHER_TOKEN
};

module.exports = { config };