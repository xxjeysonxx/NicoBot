const Discord = require('discord.js');
const client = new Discord.Client();
prefix="n!"
const { Client, MessageEmbed  } = require("discord.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
       status: "online",
       activity: {
          name: "Lista para moderar | n!info",
          type: "PLAYING"
       }
    });
  });

client.on("message", message => { //nuevo ping
if (message.content.startsWith(prefix + "ping")) {
    
  var ping = Date.now() - message.createdTimestamp + " ms";
  message.reply("el ping es `" + `${Date.now() - message.createdTimestamp}` + " ms`");
console.log(`el ping es ` +  `${Date.now() - message.createdTimestamp}` + `ms`)
}
});


client.on("message", msg => {
  if (msg.content === "chale")  {
    msg.react("732804850353569842");
    console.log(`chale moment`);
  } 
  else if (msg.content === "Chale")
  {
    msg.react("732804850353569842");
    console.log(`chale moment`);
  }
  else if (msg.content === "Joto")
  {
    msg.reply("es joto");
    console.log(`chale moment`);
  }
});

client.on("message", msg => {
  if (msg.content === "Chale") {
    msg.react("732804850353569842");
    console.log(`chale moment`);
  }
});

client.on("message",msg => {
  if(msg.content.startsWith("n!jotos")){
let peepo = msg.mentions.users.first();
 msg.channel.send("<@" + peepo.id + "> es joto xdxdxd");
  }
});

client.on("message", msg => {
  if (msg.content === "F") {
    msg.reply("ha pagado sus respetos");
    //const channel = client.channels.cache.get('732804508345958421');
   //msg.channel.send("https://i.kym-cdn.com/photos/images/original/001/450/260/5a7.jpg");
    msg.react("732805781174485024");
    console.log(`F command`);
  }
   else if (msg.content === "f") {
    msg.reply("ha pagado sus respetos");
    //const channel = client.channels.cache.get('732804508345958421');
   //msg.channel.send("https://i.kym-cdn.com/photos/images/original/001/450/260/5a7.jpg");
    msg.react("732805781174485024");
    console.log(`F command`);
  }
});

client.on("message",message =>{
  if(message.content === ("n!info")){
  const emdbed = new MessageEmbed()
  .setTitle("About Me")
  .setAuthor(message.member.displayName,message.author.displayAvatarURL())
  .setColor("0xF700FF")
  //.setThumbnail("https://media.discordapp.net/attachments/716466811952169030/716475623551402064/portada_twitter.png");
  .setThumbnail("https://media.discordapp.net/attachments/716466811952169030/716475623551402064/portada_twitter.png")
  .setDescription("bot creado por Jeyson")
  //.setDescription("bot de micelanea y moderacion")
  .addField("ID",message.guild.id,true)
  .addField("Region: ",message.guild.region)
  .addField("Dueño",message.guild.owner.displayName)
  .addField("miembros",message.guild.memberscount)
  .addField("instagram ", "[@jeysontsu](https://www.instagram.com/jeysontsu/)",true)
  .addField("Twitter ", "[Jeyson890](https://twitter.com/Jeyson890)",true)
  .addField("Youtube ", "[ツJeyson](https://www.youtube.com/BreatwinsTV)",true)
  .setImage("https://media.discordapp.net/attachments/716466811952169030/716480538155941888/thumbnail100x100.png")
  .setFooter("consultado por" + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp();
  message.channel.send(emdbed);
  
  }
  });

client.login('your token here');
