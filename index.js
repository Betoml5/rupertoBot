const dotenv = require("dotenv");
dotenv.config();

const Anime_Images = require("anime-images-api");
const API = new Anime_Images();
const { Client, Intents, MessageEmbed } = require("discord.js");
const { config } = require("./config");
const fetch = require("node-fetch");
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

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!"; // just an example, change to whatever you want
var apikey = "0AY2GAYCRBBG";

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${config.weatherToken}&q=${city}&aqi=no`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix

  if (cmd == "hug") {
    const { image } = await API.sfw.hug();
    if (message.mentions.members.first()) {
      const exampleEmbed = new MessageEmbed()
        .setColor("RED")
        .setImage(image)
        .setTitle(
          `${message.author.username} le dio un fuerte abrazo a ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setFooter("Made by Betoml5");
      message.channel.send({ embeds: [exampleEmbed] });
    } else {
      message.channel.send("Tagea a alguien para abrazar");
    }
  }

  if (cmd == "punch") {
    const { image } = await API.sfw.punch();
    if (message.mentions.members.first()) {
      const exampleEmbed = new MessageEmbed()
        .setColor("RED")
        .setImage(image)
        .setTitle(
          `${message.author.username} golpeo a ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setFooter("Made by Betoml5");
      message.channel.send({ embeds: [exampleEmbed] });
    } else {
      message.channel.send("Tagea a alguien para golpear");
    }
  }

  if (cmd == "kiss") {
    const { image } = await API.sfw.kiss();
    if (message.mentions.members.first()) {
      const exampleEmbed = new MessageEmbed()
        .setColor("RED")
        .setImage(image)
        .setTitle(
          `${message.author.username} beso a ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setFooter("Made by Betoml5");
      message.channel.send({ embeds: [exampleEmbed] });
    } else {
      message.channel.send("Tagea a alguien para besar");
    }
  }

  if (cmd == "slap") {
    const { image } = await API.sfw.slap();
    if (message.mentions.members.first()) {
      const exampleEmbed = new MessageEmbed()
        .setColor("RED")
        .setImage(image)
        .setTitle(
          `${message.author.username} golpeo a ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setFooter("Made by Betoml5");
      message.channel.send({ embeds: [exampleEmbed] });
    } else {
      message.channel.send("Tagea a alguien para golpear");
    }
  }

  if (cmd == "kill") {
    const { image } = await API.sfw.kill();
    console.log(image);
    if (message.mentions.members.first()) {
      const exampleEmbed = new MessageEmbed()
        .setColor("RED")
        .setImage(image)
        .setTitle(
          `${message.author.username} mato a ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setFooter("Made by Betoml5");
      message.channel.send({ embeds: [exampleEmbed] });
    } else {
      message.channel.send("Tagea a alguien para matar");
    }
  }

  if (cmd == "wink") {
    const { image } = await API.sfw.wink();
    if (message.mentions.members.first()) {
      const exampleEmbed = new MessageEmbed()
        .setColor("RED")
        .setImage(image)
        .setTitle(
          `${message.author.username} es un coqueto con ${
            message.mentions.users.first().username
          }`
        )
        .setTimestamp()
        .setFooter("Made by Betoml5");
      message.channel.send({ embeds: [exampleEmbed] });
    } else {
      message.channel.send("Tagea a alguien para coquetear");
    }
  }

  if (cmd == "clima") {
    if (args[1] != "") {
      if (args[1] && args[2]) {
        const city = args[1] + " " + args[2];
        const cityData = await getWeather(city);
        if (cityData) {
          const temp_c = cityData?.current?.temp_c;
          const image =
            "https://" + cityData?.current?.condition?.icon.split("//")[1];
          const exampleEmbed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle(`CLIMA DE ${cityData?.location?.name}`)
            .setDescription(
              `Hola. ${message.author.username}, el clima actual de ${
                cityData.location.name
              } es: ${temp_c}°. ${"\n"} ${
                temp_c <= 15
                  ? "Un clima bastante agradable e intersubjetivo. 🥶"
                  : "Este clima es intriseco para cada individuo. 🔥"
              } `
            )
            .setImage(image)
            .setTimestamp()
            .setFooter("Made by Betoml5");

          message.channel.send({ embeds: [exampleEmbed] });
        } else {
          message.channel.send("No encontre datos de esta ciudad.");
        }
      } else {
        const city = args[1] + " " + args[2];
        const cityData = await getWeather(city);
        if (cityData) {
          const temp_c = cityData?.current?.temp_c;
          const image =
            "https://" + cityData?.current?.condition?.icon.split("//")[1];
          const exampleEmbed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle(`Clima de ${cityData?.location?.name}`)
            .setDescription(
              `Hola. ${message.author.username}, el clima actual de ${
                cityData.location.name
              } es: ${temp_c}°. ${"\n"} ${
                temp_c <= 15
                  ? "Un clima bastante agradable e intersubjetivo. 🥶"
                  : "Este clima es intriseco para cada individuo. 🔥"
              } `
            )
            .setImage(image)
            .setTimestamp()
            .setFooter("Made by Betoml5");

          message.channel.send({ embeds: [exampleEmbed] });
        } else {
          message.channel.send("No encontre datos de esta ciudad.");
        }
      }
    } else {
      message.channel.send("Necesito una ciudad, pais o region");
    }
  }

  if (cmd == "cat") {
    const lmt = 56;
    const search_term = "cat";
    const search_url =
      "https://g.tenor.com/v1/search?q=" +
      search_term +
      "&key=" +
      apikey +
      "&limit=" +
      lmt;

    const getCumGif = async () => {
      const res = await fetch(search_url);
      const gif = await res.json();

      return gif;
    };
    const gif = await getCumGif();
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
      .setColor("RED")
      .setTitle(`${message.author.username} le gustan los gatos`)
      .setDescription(`${message.author.username} Este gato esta bonito`)
      .setImage(gif.results[randomNumber].media[0].gif.url)
      .setTimestamp()
      .setFooter("Made by Betoml5");

    message.channel.send({ embeds: [exampleEmbed] });
  }

  if (cmd == "intrinseco") {
    message.channel.send(
      "Es que es lo mismo wey, es exactamente lo mismooo!!! Es una construcción intersubjetiva a la que le adjudicas un valor intrínseco y la persigues, o sea el hecho de que la gente se forme para tocar una piedra weeey es lo mismo a que la gente se forme a tomarse una foto con un espejo, es lo mismoOoOO"
    );
  }

  if (cmd == "comandos") {
    const exampleEmbed = new MessageEmbed()
      .setColor("RED")
      .setTitle("COMANDOS")
      .setDescription(
        `!punch @user - Golpea a alguien
        !kiss @user - Besa a alguien
        !hug @user - Abrazar a alguien
        !kill @user - Mata a alguien
        !wink @user - Coquetear con alguien
        !slap @user - Bofetea a alguien
        !clima Saltillo - Te dice el clima de Saltillo o cualquier ciudad
        !cat - Foto de gato`
      )
      .setTimestamp()
      .setFooter("Made by Betoml5");
    message.channel.send({ embeds: [exampleEmbed] });
  }

  if (cmd == "presentacion") {
    const text = `Soy un autor, creador de contenido y conferencista mexicano de 28 años nacido en Monterrey, Nuevo León. Cuento con +7 millones de seguidores en todas mis redes sociales y mi trabajo ha sido reproducido +1,000 millones de veces.
        También soy ingeniero de software, host de los podcasts Creativo y Cosas, creador proyectos sociales, campañas publicitarias y director creativo de mi agencia de contenido Porciento. 
        También he trabajado con grandes marcas de todo el mundo creando campañas publicitarias de alto impacto, impartido +250 conferencias sobre creatividad y tecnología alrededor del mundo y publicado 2 libros bestseller que han vendido +50,000 copias en todo el país.
        Mi primer libro México lindo y querido diario recopila 48 historias de mexicanos de distintas clases sociales y busca mostrar como es la vida en mi país sin tener que abrir las noticias. Este proyecto fue uno de los libros más exitosos del 2017 y fue nominado a distintos premios por su trabajo editorial.
        Mi segundo libro Creativo: 100 consejos para vivir de tu arte, es una colección de consejos para vivir y llevar una carrera en cualquier medio creativo de forma exitosa, basado en mi experiencia personal y en testimonios de más de 30 creativos exitosos. El libro ha recibido muy buenas críticas por personas alrededor del país, de distintas profesiones creativas.`;
    const exampleEmbed = new MessageEmbed()
      .setColor("RED")
      .setTitle("Presentacion de Ruperto Martinez")
      .setDescription(text)
      .setImage(
        "https://cdn.shopify.com/s/files/1/0022/9739/7308/files/fd_large.jpg"
      )
      .setTimestamp()
      .setFooter("Made by Betoml5");

    message.channel.send({ embeds: [exampleEmbed] });
  }
});

client.login(config.discordToken);
