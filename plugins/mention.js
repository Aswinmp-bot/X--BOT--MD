const {Sparky,isPublic} = require("../lib");
const {SUDO} = require('../config.js');
const fetch = require("node-fetch");



Sparky({
    on: "text",
    fromMe: isPublic,
},
    async({
        m, client, args
    })=> {
      //  if ( MENTIONE === "true" ? "false" : true && false ) {
        let song = [ "https://cdn.ironman.my.id/q/yjryp.mp4","https://cdn.ironman.my.id/q/ywecS.mp4","https://cdn.ironman.my.id/q/zRSwS.mp4","https://cdn.ironman.my.id/q/FpJYh.mp4","https://cdn.ironman.my.id/q/wVHal.mp4",];
        const songMsg = song[Math.floor(Math.random() * song.length)];
        let img = ["https://cdn.ironman.my.id/q/zRfLV.jpg","https://cdn.ironman.my.id/q/xxBax.jpg","https://cdn.ironman.my.id/q/DhBxA.jpg","https://cdn.ironman.my.id/q/HElrw.jpg","https://cdn.ironman.my.id/q/etLJh.jpg",];
        const imgMsg = img[Math.floor(Math.random() * img.length)];
        let SUDO = "918157082630";
if(SUDO.split("@").some((number) => args?.includes(number))) {
              const Audios = await (await fetch(songMsg)).buffer()
await client.sendMessage(m.jid,{audio: Audios,mimetype: 'audio/mp4', ptt: true,
contextInfo: 
{ externalAdReply: {
title: "ꪶ♰͜͡𝛢𝛴̨͢𝛭𝛪𝅦𝛮̨͢𝛭ˌ𝛲͜͡✯ꫂ͛",
body: "ʜʏ ʙʀᴏ!",
sourceUrl: "https://www.instagram.com/xswinnee",
mediaUrl: "https://www.instagram.com/xswinnee",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: imgMsg }} },{quoted: m })
    
} });
