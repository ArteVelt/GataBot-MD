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

── ▪️ *FUN | MENÚS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}start_
 ─ ۰ _${usedPrefix}next_
 ─ ۰ _${usedPrefix}leave_
 ─ ۰ _${usedPrefix}mates | matemáticas | math_
 ─ ۰ _${usedPrefix}ppt *piedra : papel : tijera*_
 ─ ۰ _${usedPrefix}tictactoe | ttt *sala*_
 ─ ۰ _${usedPrefix}deltictactoe | delttt_
 ─ ۰ _${usedPrefix}topgays_
 ─ ۰ _${usedPrefix}topotakus_
 ─ ۰ _${usedPrefix}topintegrantes | topintegrante_
 ─ ۰ _${usedPrefix}toplagrasa | topgrasa_
 ─ ۰ _${usedPrefix}toppanafrescos | toppanafresco_
 ─ ۰ _${usedPrefix}topshiposters | topshipost_
 ─ ۰ _${usedPrefix}toppajeros | toppajer@s_
 ─ ۰ _${usedPrefix}toplindos | toplind@s_
 ─ ۰ _${usedPrefix}topput@s_
 ─ ۰ _${usedPrefix}topfamosos | topfamos@s_
 ─ ۰ _${usedPrefix}topparejas | top5parejas_
 ─ ۰ _${usedPrefix}gay | gay *@tag*_
 ─ ۰ _${usedPrefix}gay2 *nombre : @tag*_
 ─ ۰ _${usedPrefix}lesbiana *nombre : @tag*_
 ─ ۰ _${usedPrefix}manca *nombre : @tag*_
 ─ ۰ _${usedPrefix}manco *nombre : @tag*_
 ─ ۰ _${usedPrefix}pajero *nombre : @tag*_
 ─ ۰ _${usedPrefix}pajera *nombre : @tag*_
 ─ ۰ _${usedPrefix}puto *nombre : @tag*_
 ─ ۰ _${usedPrefix}puta *nombre : @tag*_
 ─ ۰ _${usedPrefix}rata *nombre : @tag*_
 ─ ۰ _${usedPrefix}love *nombre : @tag*_
 ─ ۰ _${usedPrefix}doxear *nombre : @tag*_
 ─ ۰ _${usedPrefix}doxxeame_
 ─ ۰ _${usedPrefix}pregunta *texto*_
 ─ ۰ _${usedPrefix}apostar | slot *cantidad*_
 ─ ۰ _${usedPrefix}formarpareja_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}verdad_
 ─ ۰ _${usedPrefix}reto_
 ─ ۰ _${usedPrefix}simi | okgoogle *texto*_
 ─ ۰ _${usedPrefix}alexa | siri | cortana *texto*_
 ─ ۰ _${usedPrefix}simsimi | bixby *texto*_
 ─ ۰ _${usedPrefix}multijuegos_
 ─ ۰ _${usedPrefix}juegos_
└──────────────────┘`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://velaut.carrd.co', 'Vélaut & co', null, null, [
['▪️ 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ▪️', '.allmenu'],
['▫️ 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 ▫️', '/inventario'],
['▪️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ▪️', '#menu']
], m,)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(juegosmenu)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
