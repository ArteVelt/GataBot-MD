import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let { money } = global.db.data.users[m.sender]
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
/*
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
{title: "▪️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ▪️", description: null, rowId: `${usedPrefix}menu`},
{title: "▫️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ▫️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "▪️ 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 ▪️", description: "𝙂𝙍𝙐𝙋𝙊𝙎 𝙀𝙉 𝘿𝙊𝙉𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙃𝘼 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊\n𝙂𝙍𝙊𝙐𝙋𝙎 𝙒𝙃𝙀𝙍𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿", rowId: `${usedPrefix}listagrupos`},
{title: "▫️ 𝙀𝙨𝙩𝙖𝙙𝙤 | 𝙎𝙩𝙖𝙩𝙪𝙨 ▫️", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙀𝙎𝙏𝘼𝘿𝙊 𝙔 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙏𝘼𝙏𝙐𝙎 𝘼𝙉𝘿 𝙈𝙊𝙍𝙀 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}estado`},   
{title: "▪️ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙖 ▪️", description: "𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙏𝘼𝙇𝙇𝘼𝘿𝘼\n𝘿𝙀𝙏𝘼𝙄𝙇𝙀𝘿 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}infogata`},    
{title: "▫️ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 ▫️", description: "𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼\n𝙈𝙔 𝘾𝙍𝙀𝘼𝙏𝙊𝙍", rowId: `${usedPrefix}creadora`},      
{title: "▪️ 𝙋𝙞𝙣𝙜 ▪️", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},    
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌
*¡Hola! ${username}* ♡

┌──────────────────┐
 ─ ۰ *EXPERIENCIA | EXP ➺ ${exp}*
 ─ ۰ *NIVEL | LEVEL ➺ ${level}*
 ─ ۰ *ROL ➺* ${role}
 ─ ۰ *VÉLAUTCOINS ➺ $ ${money}*
 ─ ۰ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
└──────────────────┘

── ▪️ *INFORMACIÓN | MENÚS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}cuentasgatabot | cuentasgb_
 ─ ۰ _${usedPrefix}gruposgb | grupos | groupgb_
 ─ ۰ _${usedPrefix}donar | donate_
 ─ ۰ _${usedPrefix}listagrupos | grouplist_
 ─ ۰ _${usedPrefix}estado | heygata | status_
 ─ ۰ _${usedPrefix}infogata | infobot_
 ─ ۰ _${usedPrefix}instalarbot | installbot_
 ─ ۰ _${usedPrefix}creadora | owner_
 ─ ۰ _${usedPrefix}velocidad | ping_
 ─ ۰ _Bot_ 
 ─ ۰ _términos y condiciones_
└──────────────────┘`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://velaut.carrd.co', 'Vélaut & co', null, null, [
['▪️ 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ▪️', '.allmenu'],
['▫️ 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 ▫️', '/inventario'],
['▪️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ▪️', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(infomenu)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
