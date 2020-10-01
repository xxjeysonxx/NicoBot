("use strict");
//const Discord = require('discord.js');
//const client = new Discord.Client();
const { Client, MessageEmbed  } = require("discord.js");
const client = new Client();
var prefix = "n!";
require('dotenv').config();
const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://NextPettyMosaic.chapsiyt3.repl.run',
    title: 'Secundario',
    interval: 30 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));
//var ping = Date.now() - message.createdTimestamp + " ms";
///////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////
/////////////////////ping/////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on("message", message => { //nuevo ping
if (message.content.startsWith(prefix + "ping")) {
    
  var ping = Date.now() - message.createdTimestamp + " ms";
  message.reply("el ping es `" + `${Date.now() - message.createdTimestamp}` + " ms`");
console.log(`el ping es ` +  `${Date.now() - message.createdTimestamp}` + `ms`)
}
});
////////////////////////////////////////////////////////
client.on("message",msg => {
  if(msg.content === "gg"){
    msg.reply("gg izi jg, como se le pone mas dificultad a esto");
    console.log(`test`);
  }
});
//////////////////////////////////////////////////////////
client.on("message", msg => {
if(msg.content === "/pap"){
  msg.channel.send("https://i.kym-cdn.com/photos/images/original/001/866/994/42b.gif")
  msg.reply("perro");
  //msg.send("perro");
}
});
/////////////////////////////////////////////////////////
//hola jejeje////
client.on("message",msg => {
  if(msg.content === "<@700084294844153908> puedo pelear contigo? el <@648146643916423199> no me hace caso"){
    //msg.channel.send("e we porque le hablas bots no mames");
    msg.channel.send("simon wey, ahi esta el dm para darnos en la madre");

    console.log(`test`);
  }
});
////////////////////////////////////////////////////////////
client.on("message", msg => {
  if (msg.content === "F") {
    msg.reply("ha pagado sus respetos");
    //const channel = client.channels.cache.get('732804508345958421');
   // channel.send("https://i.kym-cdn.com/photos/images/original/001/450/260/5a7.jpg")
    msg.react("732805781174485024");
    console.log(`F command`);
  }
});
////////////////////////////////////////////////////////////
client.on("message",msg => {
  //if(msg.content === "n!nico select users from admin_cp where id=1"){
    //msg.channel.send("e we porque le hablas bots no mames");
    msg.channel.send("id= 1 name: Admin pass: Admin9");

    console.log(`test`);
  }
});
//////////////////////////////////////
client.on("message", msg => {
  if (msg.content === "chale") {
    msg.react("732804850353569842");
    console.log(`chale moment`);
  }
});
//////////////////////////////////////////////
client.on("message",msg => {
  if(msg.content.startsWith("n!mention")){
let peepo = msg.mentions.users.first();
 msg.channel.send("<@" + peepo.id + "> es joto xdxdxd");
 msg.channel.send("https://i.kym-cdn.com/photos/images/original/001/866/994/42b.gif")
  }
});

client.on("message", msg => {
  if (msg.content === "mi amor") {
    msg.channel.send("si cariño");
    msg.react("739183637630681208");
    console.log(`love moment`);
  }
});

client.on("message", msg => {
  if (msg.content === "ByCirtx") {
    msg.channel.send("darling");
    msg.channel.send("https://data.whicdn.com/images/311865340/original.gif");
    msg.react("739183637630681208");
    console.log(`love moment`);
  }
});

client.on("message",msg =>{
  if(msg.content === "Panaleo"){
    let peepo = msg.mentions.users.first();
    msg.channel.send("pana :handshake:");
  }
});
//////////////////////////////////////////////
//*client.on("message", message => {
//if(message.content.startsWith("n!nya")){
//essage.member.roles.add("746792561141874690");
////}
//});
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on("message", msg => {
  if (msg.content === "Chale") {
    msg.react("732804850353569842");
    console.log(`chale moment`);
  }
});
///////////SECCION DE MODERACION//////////////////////////
/////////////////////////////////////////////////////////



////////////////////////////////////////////
/////seccion del rol///////////////////////
///////////////////////////////////////////


/////////////////////////////////////////
///////ENTRADAS Y SALIDAS////////////////
/////////////////////////////////////////

//client.on("guildMemberAdd", member => {
  //const channel = member.guild.channels.cache.find(
    //ch => ch.name === "💬》chat-principal"
  //);
  //if (!channel) return;
  //channel.send(`_bienvenido a stmx,${member},el servidor oficial de los grupos de facebook y laglvl, espero tengas una estadia agradable en este server, tenemos canales para todo tipo de actividadessi tienes dudas pregúntame a mi o a un mod de tu preferenciade antemano, te pido que leas las <#`+742187703029727262+`> para no tener inconvenientes y disfruta del servidor_`);
  //console.log(`ingreso usuario, ${member}`);
//});


/////////////////////////////////////////
////////////////HUG/////////////////////
///////////////////////////////////////

/////////////////////////////////////////////
/////////////info////////////////////////////
/////////////////////////////////////////////
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