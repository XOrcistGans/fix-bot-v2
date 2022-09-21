import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCWUQQiIXZlni9OF-kXtbNlA*

Pengen mentahan nya ?
Nih ada santai bro....
Gausah nyolong kintil, minimal izin ke owner gw dulu

Mau Yang No Error Script Bot nya, Gas Cek Video YT :
https://youtube.com/channel/UCWUQQiIXZlni9OF-kXtbNlA

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6283149798467`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/kingdomidn_",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/kingdomidn_", 
    title: '𝐗𝐎𝐫𝐜𝐢𝐬𝐭𝐆𝐚𝐧𝐬 - 𝐁𝐎𝐓',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
