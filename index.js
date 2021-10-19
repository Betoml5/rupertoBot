const { Client, Intents, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch")
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
});

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});






const prefix = '!'; // just an example, change to whatever you want
var apikey = "0AY2GAYCRBBG";
const apiWeatherKey = "c8bc6cc6fcb34e7ca0951102210402";

const getWeather = async (city) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c8bc6cc6fcb34e7ca0951102210402&q=${city}&aqi=no`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix

    if (cmd == "clima") {

        if (args[1] != "") {
            if (args[1] && args[2]) {
                const city = args[1] + " " + args[2];
                const cityData = await getWeather(city);
                if (cityData) {
                    const temp_c = cityData?.current?.temp_c;
                    const image = "https://" + cityData?.current?.condition?.icon.split('//')[1];
                    const exampleEmbed = new MessageEmbed()
                        .setColor('BLUE')
                        .setTitle(`CLIMA DE ${cityData?.location?.name}`)
                        .setDescription(`Hola. ${message.author.username}, el clima actual de ${cityData.location.name} es: ${temp_c}°. ${"\n"} ${temp_c <= 15 ? "Un clima bastante agradable e intersubjetivo. 🥶" : "Este clima es intriseco para cada individuo. 🔥"} `)
                        .setImage(image)
                        .setTimestamp()
                        .setFooter('Made by Betoml5');

                    message.channel.send({ embeds: [exampleEmbed] });
                } else {
                    message.channel.send("No encontre datos de esta ciudad.")
                }
            } else {
                const city = args[1] + " " + args[2];
                const cityData = await getWeather(city);
                if (cityData) {
                    const temp_c = cityData?.current?.temp_c;
                    const image = "https://" + cityData?.current?.condition?.icon.split('//')[1];
                    const exampleEmbed = new MessageEmbed()
                        .setColor('BLUE')
                        .setTitle(`CLIMA DE ${cityData?.location?.name}`)
                        .setDescription(`Hola. ${message.author.username}, el clima actual de ${cityData.location.name} es: ${temp_c}°. ${"\n"} ${temp_c <= 15 ? "Un clima bastante agradable e intersubjetivo. 🥶" : "Este clima es intriseco para cada individuo. 🔥"} `)
                        .setImage(image)
                        .setTimestamp()
                        .setFooter('Made by Betoml5');

                    message.channel.send({ embeds: [exampleEmbed] });
                } else {
                    message.channel.send("No encontre datos de esta ciudad.")
                }
            }
        } else {
            message.channel.send("Necesito una ciudad, pais o region")
        }





    }

    if (cmd == "llorar") {
        const lmt = 56;
        const search_term = "cry";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        const getCryGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();

            return gif;
        }
        const gif = await getCryGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);


        const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} hizo llorar a ${message.mentions.users.first().username}`)
            .setDescription(`${message.author.username} es muy malo`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by Betoml5');

        message.channel.send({ embeds: [exampleEmbed] });
    }

    if (cmd == "punch") {
        const lmt = 56;
        const search_term = "punch";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        const getPunchGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();

            return gif;
        }
        const gif = await getPunchGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);

        const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} GOLPEO a ${message.mentions.users.first().username}`)
            .setDescription(`${message.author.username} es muy malo`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by Betoml5');

        message.channel.send({ embeds: [exampleEmbed] });
    }

    if (cmd == "kiss") {
        const lmt = 56;
        const search_term = "kiss";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        const getKissGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();

            return gif;
        }
        const gif = await getKissGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);

        const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} beso a ${message.mentions.users.first().username}`)
            .setDescription(`${message.author.username} es muy amoroso`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by Betoml5');

        message.channel.send({ embeds: [exampleEmbed] });
    }

    if (cmd == "cum") {
        const lmt = 56;
        const search_term = "cummed";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        const getCumGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();

            return gif;
        }
        const gif = await getCumGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);

        const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} cumeo a ${message.mentions.users.first().username}`)
            .setDescription(`${message.author.username} es muy amoroso`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by Betoml5');

        message.channel.send({ embeds: [exampleEmbed] });
    }

    if (cmd == "lol") {
        const lmt = 56;
        const search_term = "league of legends";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        const getCumGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();

            return gif;
        }
        const gif = await getCumGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);

        const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} quiere jugar LOL`)
            .setDescription(`${message.author.username} se quiere muy poco`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by Betoml5');

        message.channel.send({ embeds: [exampleEmbed] });
    }

    if (cmd == "cat") {
        const lmt = 56;
        const search_term = "cat";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;

        const getCumGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();

            return gif;
        }
        const gif = await getCumGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);

        const exampleEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.username} le gustan los gatxs`)
            .setDescription(`${message.author.username} no asume generxs`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by Betoml5');

        message.channel.send({ embeds: [exampleEmbed] });
    }

    if (cmd == "intrinseco") {
        message.channel.send("Es que es lo mismo wey, es exactamente lo mismooo!!! Es una construcción intersubjetiva a la que le adjudicas un valor intrínseco y la persigues, osea el hecho de que la gente se forme para tocar una piedra weeey es lo mismo a que la gente se forme a tomarse una foto con un espejo, es lo mismoOOo")
    }

    if (cmd == "pio") {
        message.reply("pio")
    }


});

client.login('ODk5MTY5NDY3Nzg1OTM2OTE3.YWu20g.wvNQ5Lp8UqSblubjSXcKFYhpZ0g');