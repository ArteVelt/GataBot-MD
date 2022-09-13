import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `LISTA DESPLEGABLE`,
rows: [
      {title: "▫️ 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 ▫️", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "▪️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ▪️", description: null, rowId: `${usedPrefix}listprem`},
      {title: "▫️ 𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ▫️", description: null, rowId: `${usedPrefix}pase premium`},
      {title: "▪️ 𝙏𝙊𝙋 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 ▪️", description: null, rowId: `${usedPrefix}top`},
      {title: "▫️ 𝙈𝙄𝙎𝙄𝙊𝙉𝙀𝙎 ▫️", description: null, rowId: `${usedPrefix}inventario 3`},
      {title: "▪️ 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 ▪️", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "▫️ 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 ▫️", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "▪️ 𝙅𝙐𝙀𝙂𝙊𝙎 ▪️", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "▫️ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 ▫️", description: null, rowId: `${usedPrefix}audios`},
      {title: "▪️ 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 ▪️", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "▫️ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 ▫️", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "▪️ 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ▪️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "▫️ 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ▫️", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "▪️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 ▪️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "▫️ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ▫️", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "▪️ 𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊 2 ▪️", description: null, rowId: `${usedPrefix}menulogos2`},
      {title: "▫️ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ▫️", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "▪️ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 ▪️", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "▫️ 𝙍𝘼𝙉𝘿𝙊𝙈 | 𝘼𝙉𝙄𝙈𝙀 ▫️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "▪️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ▪️", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "▫️ 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 ▫️", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "▪️ 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 ▪️", description: null, rowId: `términos`},
      

]}, ]
 
let name = await conn.getName(m.sender)
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
//let name = conn.getName(m.sender)
const listMessage = {
text: `
┌──────────────────┐
 ─ ۰ *Tiempo Actual | Current Time*	    
 ─ ۰ ${time}   
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ─ ۰ *Activa durante | Active during* 
 ─ ۰ ${uptime}
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ─ ۰ *Usuario(s) | Users*
 ─ ۰ ${Object.keys(global.db.data.users).length} 
    ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ─ ۰ *Modo | Mode*
 ─ ۰ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ─ ۰ *Chat(s) Prohibido(s) | Chats Denied*
 ─ ۰ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ─ ۰ *Usuario(s) Prohibido(s) | Denied Users*
 ─ ۰ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
└──────────────────┘`, footer: ``, //${name} ${ucapan()}
title: null,
buttonText: "𝙈𝙀𝙉𝙐", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
//await conn.sendMessage(m.chat, listMessage)
//await conn.sendMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: m, enlace })
//await conn.sendMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "▪️ *BIENVENIDO(A) | WELCOME* ▪️"
  if (time >= 4) {
    res = "▫️ *Buenos Días | Good Morning* ▫️"
  }
  if (time >= 11) {
    res = "▪️ *Buenas Tardes | Good Afternoon* ▪️"
  }
  if (time >= 15) {
    res = "▫️ *Buenas tardes | Good Afternoon* ▫️"
  }
  if (time >= 17) {
    res = "▪️ *Buenas noches | Good Evening* ▪️"
  }
  return res
} 



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)

let menu = `╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌
*¡Hola! ${username}* ♡

┌──────────────────┐
 ─ ۰ *EXPERIENCIA | EXP ➺ ${exp}*
 ─ ۰ *NIVEL | LEVEL ➺ ${level}*
 ─ ۰ *ROL ➺* ${role}
 ─ ۰ *VÉLAUTCOINS ➺ $ ${money}*
 ─ ۰ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
└──────────────────┘`
//menulista
let menulista = `
── ▪️ *MODIFICAR AUDIO | MENÚS*
 ۰ ${name}
 ┌──────────────────┐
${readMore}
── ▪️ *MENÚ COMPPLETO | MENÚS*
 ─ ۰ _${usedPrefix}allmenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *LISTA CLASIFICATORIA | MENÚS*
 ─ ۰ _${usedPrefix}top_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *INFO | MENÚS*
 ─ ۰ _${usedPrefix}infomenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *JUEGOS | MENÚS*
 ─ ۰ _${usedPrefix}juegosmenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *AUDIOS | MENÚS*
 ─ ۰ _${usedPrefix}audios_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *MODIFICAR AUDIOS | MENÚS*
 ─ ۰ _${usedPrefix}audioefectomenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *GRUPOS | MENÚS*
 ─ ۰ _${usedPrefix}grupomenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *CONFIGURACIÓN | MENÚS*
 ─ ۰ _${usedPrefix}on_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *STICKERS | MENÚS*
 ─ ۰ _${usedPrefix}stickermenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *CONVERTIDOR | MENÚS*
 ─ ۰ _${usedPrefix}convertidormenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *EFECTOS Y LOGOS | MENÚS*
 ─ ۰ _${usedPrefix}makermenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *DESCARGAS | MENÚS*
 ─ ۰ _${usedPrefix}descargasmenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *BÚSQUEDAS | MENÚS*
 ─ ۰ _${usedPrefix}buscarmenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *RANDOM | MENÚS*
 ─ ۰ _${usedPrefix}randommenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *RPG | MENÚS*
 ─ ۰ _${usedPrefix}rpgmenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *PROPIETARIO | MENÚS*
 ─ ۰ _${usedPrefix}ownermenu_
   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
── ▪️ *TÉRMINOS Y CONDICIONES | MENÚS*
 ─ ۰ _Términos_
└──────────────────┘`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendMessage(m.chat, { text: menulista, mentions: [m.sender] }, { quoted: fkontak, m })
	
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "▪️ *BIENVENIDO(A) | WELCOME* ▪️"
  if (time >= 4) {
    res = "▫️ *Buenos Días | Good Morning* ▫️"
  }
  if (time >= 11) {
    res = "▪️ *Buenas Tardes | Good Afternoon* ▪️"
  }
  if (time >= 15) {
    res = "▫️ *Buenas tardes | Good Afternoon* ▫️"
  }
  if (time >= 17) {
    res = "▪️ *Buenas noches | Good Evening* ▪️"
  }
  return res
}*/

