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
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
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

── ▪️ *GRUPO | MENÚS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}add *numero*_
 ─ ۰ _${usedPrefix}sacar | ban | kick  *@tag*_
 ─ ۰ _${usedPrefix}grupo *abrir : cerrar*_
 ─ ۰ _${usedPrefix}group *open : close*_
 ─ ۰ _${usedPrefix}daradmin | promote *@tag*_
 ─ ۰ _${usedPrefix}quitar | demote *@tag*_
 ─ ۰ _${usedPrefix}banchat_
 ─ ۰ _${usedPrefix}unbanchat_
 ─ ۰ _${usedPrefix}banuser *@tag*_
 ─ ۰ _${usedPrefix}unbanuser *@tag*_
 ─ ۰ _${usedPrefix}admins *texto*_
 ─ ۰ _${usedPrefix}invocar *texto*_
 ─ ۰ _${usedPrefix}tagall *texto*_
 ─ ۰ _${usedPrefix}hidetag *texto*_
 ─ ۰ _${usedPrefix}infogrupo | infogroup_
 ─ ۰ _${usedPrefix}configuracion_
 ─ ۰ _${usedPrefix}settings_
 ─ ۰ _${usedPrefix}vergrupo_
 ─ ۰ _${usedPrefix}advertencia *@tag*_
 ─ ۰ _${usedPrefix}deladvertencia *@tag*_
 ─ ۰ _${usedPrefix}delwarn *@tag*_
 ─ ۰ _${usedPrefix}crearvoto | startvoto *texto*_
 ─ ۰ _${usedPrefix}sivotar | upvote_
 ─ ۰ _${usedPrefix}novotar | devote_
 ─ ۰ _${usedPrefix}vervotos | cekvoto_
 ─ ۰ _${usedPrefix}delvoto | deletevoto_
 ─ ۰ _${usedPrefix}enlace | link_
 ─ ۰ _${usedPrefix}newnombre | setname *texto*_
 ─ ۰ _${usedPrefix}newdesc | setdesc *texto*_
 ─ ۰ _${usedPrefix}setwelcome *texto*_
 ─ ۰ _${usedPrefix}setbye *texto*_
 ─ ۰ _${usedPrefix}on_
 ─ ۰ _${usedPrefix}off_
└──────────────────┘`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://velaut.carrd.co', 'Vélaut & co', null, null, [
['▪️ 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ▪️', '.allmenu'],
['▫️ 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 ▫️', '/inventario'],
['▪️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ▪️', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(grupomenu)$/i
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
