import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/TheMuseum.jpg'
let pp = './media/menus/TheMuseum.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
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
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}


let str = 
`╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌
*¡Hola! ${username}* ♡


── ▪️ *MENÚ COMPLETO | MENÚS*
┌──────────────────┐
 ─ ۰ *EXPERIENCIA | EXP ➺ ${exp}*
 ─ ۰ *NIVEL | LEVEL ➺ ${level}*
 ─ ۰ *ROL ➺* ${role}
 ─ ۰ *VÉLAUTCOINS ➺ $ ${money}*
 ─ ۰ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
└──────────────────┘

${readMore}

── ▪️ *UNIR AL GRUPO*

 ─ ۰ *¡Une a VélautBot en grupos!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}botemporal *enlace* *cantidad*_
 ─ ۰ _${usedPrefix}addbot *enlace* *cantidad*_
└──────────────────┘

── ▪️ *JUEGOS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}math | matemáticas | *modo*_
 ─ ۰ _${usedPrefix}tictactoe | tictactoe *nombre del la sala*_
 ─ ۰ _${usedPrefix}deltictactoe *nombre del la sala*_
 ─ ۰ _${usedPrefix}topgays_
 ─ ۰ _${usedPrefix}topotakus_
 ─ ۰ _${usedPrefix}toppajer@s_
 ─ ۰ _${usedPrefix}topput@s_
 ─ ۰ _${usedPrefix}topintegrantes | topintegrante_
 ─ ۰ _${usedPrefix}toplagrasa | topgrasa_
 ─ ۰ _${usedPrefix}toppanafrescos | toppanafresco_
 ─ ۰ _${usedPrefix}topshiposters | topshipost_
 ─ ۰ _${usedPrefix}toplindos | toplind@s_
 ─ ۰ _${usedPrefix}topfamosos | topfamos@s_
 ─ ۰ _${usedPrefix}topparejas | top5parejas_
 ─ ۰ _${usedPrefix}gay2 *@tag*_
 ─ ۰ _${usedPrefix}gay2 *yo*_
 ─ ۰ _${usedPrefix}gay *@tag / nombre*_
 ─ ۰ _${usedPrefix}lesbiana *@tag / nombre*_
 ─ ۰ _${usedPrefix}pajero *@tag / nombre*_
 ─ ۰ _${usedPrefix}pajera *@tag / nombre*_
 ─ ۰ _${usedPrefix}puta *@tag / nombre*_
 ─ ۰ _${usedPrefix}puto *@tag / nombre*_
 ─ ۰ _${usedPrefix}rata *@tag / nombre*_
 ─ ۰ _${usedPrefix}manco *@tag / nombre*_
 ─ ۰ _${usedPrefix}manca *@tag / nombre*_
 ─ ۰ _${usedPrefix}formarpareja | pareja5_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}verdad_
 ─ ۰ _${usedPrefix}reto_
 ─ ۰ _${usedPrefix}multijuegos_
 ─ ۰ _${usedPrefix}juegos_
 ─ ۰ _${usedPrefix}formartrio_
 ─ ۰ _${usedPrefix}love *@tag / nombre*_
 ─ ۰ _${usedPrefix}slot *cantidad*_
 ─ ۰ _${usedPrefix}ppt *piedra / papel / tijera*_
 ─ ۰ _${usedPrefix}prostituta *@tag / nombre*_
 ─ ۰ _${usedPrefix}prostituto *@tag / nombre*_
 ─ ۰ _${usedPrefix}doxxear *@tag*_
 ─ ۰ _${usedPrefix}doxxeame_
 ─ ۰ _${usedPrefix}pregunta *texto*_
 ─ ۰ _${usedPrefix}apostar | slot *cantidad*_
└──────────────────┘

── ▪️ *CHAT BOT*

 ─ ۰ *¡Tienes la Ocasión de*
 ─ ۰ *Conversar con Vélaut Bot!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}simi | okgoogle *texto*_
 ─ ۰ _${usedPrefix}alexa | siri | cortana *texto*_
 ─ ۰ _${usedPrefix}simsimi | bixby *texto*_
└──────────────────┘

── ▪️ *AJUSTES - CHATS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}on *:* off *bienvenida | welcome*_
 ─ ۰ _${usedPrefix}on *:* off *avisos | detect*_
 ─ ۰ _${usedPrefix}on *:* off *autonivel | autolevelup*_
 ─ ۰ _${usedPrefix}on *:* off *restringir | restrict*_
 ─ ۰ _${usedPrefix}on *:* off *antillamar | anticall*_
 ─ ۰ _${usedPrefix}on *:* off *publico | public*_
 ─ ۰ _${usedPrefix}on *:* off *autovisto | autoread*_
 ─ ۰ _${usedPrefix}on *:* off *temporal*_
 ─ ۰ _${usedPrefix}on *:* off *stickers*_
 ─ ۰ _${usedPrefix}on *:* off *autosticker*_
 ─ ۰ _${usedPrefix}on *:* off *reacciones | reaction*_
 ─ ۰ _${usedPrefix}on *:* off *audios*_
 ─ ۰ _${usedPrefix}on *:* off *modocaliente | modohorny*_
 ─ ۰ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
 ─ ۰ _${usedPrefix}on *:* off *antiver | antiviewonce*_
 ─ ۰ _${usedPrefix}on *:* off *antieliminar | antidelete*_
 ─ ۰ _${usedPrefix}on *:* off *antinternacional | antifake*_
 ─ ۰ _${usedPrefix}on *:* off *antienlace | antilink*_
 ─ ۰ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
 ─ ۰ _${usedPrefix}on *:* off *antitiktok | antitk*_
 ─ ۰ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
 ─ ۰ _${usedPrefix}on *:* off *antitelegram | antitel*_
 ─ ۰ _${usedPrefix}on *:* off *antifacebook | antifb*_
 ─ ۰ _${usedPrefix}on *:* off *antinstagram | antig*_
 ─ ۰ _${usedPrefix}on *:* off *antitwitter | antitw*_
 ─ ۰ _${usedPrefix}on *:* off *soloprivados | pconly*_
 ─ ۰ _${usedPrefix}on *:* off *sologrupos | gconly*_
└──────────────────┘

── ▪️ *RESUMEN GRUPO*
┌──────────────────┐
 ─ ۰ _${usedPrefix}configuracion_
 ─ ۰ _${usedPrefix}settings_
 ─ ۰ _${usedPrefix}vergrupo_
└──────────────────┘

── ▪️ *DESCARGAS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}imagen | image *texto*_
 ─ ۰ _${usedPrefix}pinterest | dlpinterest *texto*_
 ─ ۰ _${usedPrefix}wallpaper|wp *texto*_
 ─ ۰ _${usedPrefix}play | play2 *texto o link*_
 ─ ۰ _${usedPrefix}play.1 *texto o link*_
 ─ ۰ _${usedPrefix}play.2 *texto o link*_ 
 ─ ۰ _${usedPrefix}ytmp3 | yta *link*_
 ─ ۰ _${usedPrefix}ytmp4 | ytv *link*_
 ─ ۰ _${usedPrefix}pdocaudio | ytadoc *link*_
 ─ ۰ _${usedPrefix}pdocvieo | ytvdoc *link*_
 ─ ۰ _${usedPrefix}tw |twdl | twitter *link*_
 ─ ۰ _${usedPrefix}facebook | fb *link*_
 ─ ۰ _${usedPrefix}instagram *link video o imagen*_
 ─ ۰ _${usedPrefix}verig | igstalk *usuario(a)*_
 ─ ۰ _${usedPrefix}ighistoria | igstory *usuario(a)*_
 ─ ۰ _${usedPrefix}tiktok *link*_
 ─ ۰ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
 ─ ۰ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
 ─ ۰ _${usedPrefix}mediafire | dlmediafire *link*_
 ─ ۰ _${usedPrefix}clonarepo | gitclone *link*_
 ─ ۰ _${usedPrefix}clima *país ciudad*_
 ─ ۰ _${usedPrefix}consejo_
 ─ ۰ _${usedPrefix}morse codificar *texto*_
 ─ ۰ _${usedPrefix}morse decodificar *morse*_
 ─ ۰ _${usedPrefix}fraseromantica_
 ─ ۰ _${usedPrefix}historia_
└──────────────────┘

── ▪️ *CHAT ANÓNIMO*

 ─ ۰ *¡Escribe a alguien*
 ─ ۰ *de forma anónima!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}chatanonimo | anonimochat_
 ─ ۰ _${usedPrefix}anonimoch_
 ─ ۰ _${usedPrefix}start_
 ─ ۰ _${usedPrefix}next_
 ─ ۰ _${usedPrefix}leave_
└──────────────────┘

── ▪️ *CONFIGURACIÓN GRUPOS*
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
└──────────────────┘

── ▪️ *VOTACIONES EN GRUPOS*

 ─ ۰ *¡Ahora puedes hacer*
 ─ ۰ *Votaciones en Grupos!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}crearvoto | startvoto *texto*_
 ─ ۰ _${usedPrefix}sivotar | upvote_
 ─ ۰ _${usedPrefix}novotar | devote_
 ─ ۰ _${usedPrefix}vervotos | cekvoto_
 ─ ۰ _${usedPrefix}delvoto | deletevoto_
└──────────────────┘

── ▪️ *CONVERTIDORES*

 ─ ۰ *Convierte stickers en imagen,*
 ─ ۰ *Crea enlace de archivos.*
┌──────────────────┐
 ─ ۰  _${usedPrefix}toimg | img | jpg *sticker*_
 ─ ۰  _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
 ─ ۰  _${usedPrefix}tovn | vn *video o audio*_
 ─ ۰  _${usedPrefix}tovideo *audio*_
 ─ ۰  _${usedPrefix}tourl *video, imagen*_
 ─ ۰  _${usedPrefix}toenlace  *video, imagen o audio*_
 ─ ۰  _${usedPrefix}tts es *texto*_
└──────────────────┘

── ▪️ *LOGOS*
┌──────────────────┐
 ─ ۰  _${usedPrefix}logos *efecto texto*_
 ─ ۰  _${usedPrefix}menulogos2_
└──────────────────┘

── ▪️ *EFECTOS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}simpcard *@tag*_
 ─ ۰ _${usedPrefix}hornycard *@tag*_
 ─ ۰ _${usedPrefix}lolice *@tag*_
 ─ ۰ _${usedPrefix}ytcomment *texto*_
 ─ ۰ _${usedPrefix}itssostupid_
 ─ ۰ _${usedPrefix}pixelar_
 ─ ۰ _${usedPrefix}blur_
└──────────────────┘

── ▪️ *RANDOM - ANIME*
┌──────────────────┐
 ─ ۰ _${usedPrefix}chica_
 ─ ۰ _${usedPrefix}chico_
 ─ ۰ _${usedPrefix}cristianoronaldo_
 ─ ۰ _${usedPrefix}messi_
 ─ ۰ _${usedPrefix}meme2_
 ─ ۰ _${usedPrefix}itzy_
 ─ ۰ _${usedPrefix}blackpink_
 ─ ۰ _${usedPrefix}kpop *blackpink : exo : bts*_
 ─ ۰ _${usedPrefix}navidad_
 ─ ۰ _${usedPrefix}ppcouple_
 ─ ۰ _${usedPrefix}neko_
 ─ ۰ _${usedPrefix}waifu_
 ─ ۰ _${usedPrefix}akira_
 ─ ۰ _${usedPrefix}akiyama_
 ─ ۰ _${usedPrefix}anna_
 ─ ۰ _${usedPrefix}asuna_
 ─ ۰ _${usedPrefix}ayuzawa_
 ─ ۰ _${usedPrefix}boruto_
 ─ ۰ _${usedPrefix}chiho_
 ─ ۰ _${usedPrefix}chitoge_
 ─ ۰ _${usedPrefix}deidara_
 ─ ۰ _${usedPrefix}erza_
 ─ ۰ _${usedPrefix}elaina_
 ─ ۰ _${usedPrefix}eba_
 ─ ۰ _${usedPrefix}emilia_
 ─ ۰ _${usedPrefix}hestia_
 ─ ۰ _${usedPrefix}hinata_
 ─ ۰ _${usedPrefix}inori_
 ─ ۰ _${usedPrefix}isuzu_
 ─ ۰ _${usedPrefix}itachi_
 ─ ۰ _${usedPrefix}itori_
 ─ ۰ _${usedPrefix}kaga_
 ─ ۰ _${usedPrefix}kagura_
 ─ ۰ _${usedPrefix}kaori_
 ─ ۰ _${usedPrefix}keneki_
 ─ ۰ _${usedPrefix}kotori_
 ─ ۰ _${usedPrefix}kurumi_
 ─ ۰ _${usedPrefix}madara_
 ─ ۰ _${usedPrefix}mikasa_
 ─ ۰ _${usedPrefix}miku_
 ─ ۰ _${usedPrefix}minato_
 ─ ۰ _${usedPrefix}naruto_
 ─ ۰ _${usedPrefix}nezuko_
 ─ ۰ _${usedPrefix}sagiri_
 ─ ۰ _${usedPrefix}sasuke_
 ─ ۰ _${usedPrefix}sakura_
 ─ ۰ _${usedPrefix}cosplay_
└──────────────────┘

── ▪️ *MODIFICAR AUDIO*
┌──────────────────┐
 ─ ۰ _${usedPrefix}bass_
 ─ ۰ _${usedPrefix}blown_
 ─ ۰ _${usedPrefix}deep_
 ─ ۰ _${usedPrefix}earrape_
 ─ ۰ _${usedPrefix}fast_
 ─ ۰ _${usedPrefix}fat_
 ─ ۰ _${usedPrefix}nightcore_
 ─ ۰ _${usedPrefix}reverse_
 ─ ۰ _${usedPrefix}robot_
 ─ ۰ _${usedPrefix}slow_
 ─ ۰ _${usedPrefix}smooth_
 ─ ۰ _${usedPrefix}tupai_
└──────────────────┘

── ▪️ *BUSCAR*
┌──────────────────┐
 ─ ۰ _${usedPrefix}animeinfo *texto*_
 ─ ۰ _${usedPrefix}mangainfo *texto*_
 ─ ۰ _${usedPrefix}google *texto*_
 ─ ۰ _${usedPrefix}letra | lirik *texto*_
 ─ ۰ _${usedPrefix}ytsearch | yts *texto*_
 ─ ۰ _${usedPrefix}wiki | wikipedia *texto*_
└──────────────────┘

── ▪️ *HERRAMIENTAS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}afk *motivo*_
 ─ ۰ _${usedPrefix}acortar *url*_
 ─ ۰ _${usedPrefix}calc *operacion math*_
 ─ ۰ _${usedPrefix}del *respondre a mensaje del Bot*_
 ─ ۰ _${usedPrefix}qrcode *texto*_
 ─ ۰ _${usedPrefix}readmore *texto1|texto2*_
 ─ ۰ _${usedPrefix}spamwa *numero|texto|cantidad*_
 ─ ۰ _${usedPrefix}styletext *texto*_
 ─ ۰ _${usedPrefix}traducir *texto*_
 ─ ۰ _${usedPrefix}morse codificar *texto*_
 ─ ۰ _${usedPrefix}morse decodificar *morse*_
└──────────────────┘

── ▪️ *TOP VÉLAUT BOT*

 ─ ۰ *¡Averigua en que Top te encuentras!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}top | lb | leaderboard_
└──────────────────┘

── ▪️ *STICKERS Y FILTROS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}sticker | s *imagen o video*_
 ─ ۰ _${usedPrefix}sticker | s *url de tipo jpg*_
 ─ ۰ _${usedPrefix}emojimix *😺+😆*_
 ─ ۰ _${usedPrefix}scircle | círculo *imagen*_
 ─ ۰ _${usedPrefix}semoji | emoji *tipo emoji*_
 ─ ۰ _${usedPrefix}attp *texto*_
 ─ ۰ _${usedPrefix}attp2 *texto*_
 ─ ۰ _${usedPrefix}ttp *texto*_
 ─ ۰ _${usedPrefix}ttp2 *texto*_
 ─ ۰ _${usedPrefix}ttp3 *texto*_
 ─ ۰ _${usedPrefix}ttp4 *texto*_
 ─ ۰ _${usedPrefix}ttp5 *texto*_
 ─ ۰ _${usedPrefix}ttp6 *texto*_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}stickermarker *efecto : responder a imagen*_
 ─ ۰ _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 ─ ۰ _${usedPrefix}cs *:* cs2_
└──────────────────┘

── ▪️ *FIRMA STICKERS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}wm *packname|author*_
 ─ ۰ _${usedPrefix}wm *texto1|texto2*_
└──────────────────┘

── ▪️ *STICKERS DINÁMICOS*

 ─ ۰ *Realiza acciones con Stickers*
 ─ ۰ *Etiquetando a alguien.*
┌──────────────────┐
 ─ ۰ _${usedPrefix}palmaditas | pat *@tag*_
 ─ ۰ _${usedPrefix}bofetada | slap *@tag*_
 ─ ۰ _${usedPrefix}golpear *@tag*_
 ─ ۰ _${usedPrefix}besar | kiss *@tag*_
 ─ ۰ _${usedPrefix}alimentar | food *@tag*_
└──────────────────┘

── ▪️ *SOLO PROPIETARIO*
┌──────────────────┐
 ─ ۰ _${usedPrefix}join *enlace*_
 ─ ۰ _${usedPrefix}unete *enlace*_
 ─ ۰ _${usedPrefix}dardiamantes *cantidad*_
 ─ ۰ _${usedPrefix}darxp *cantidad*_
 ─ ۰ _${usedPrefix}dargatacoins *cantidad*_
 ─ ۰ _${usedPrefix}cajafuerte_
 ─ ۰ _${usedPrefix}comunicar | broadcastall | bc *texto*_
 ─ ۰ _${usedPrefix}broadcastchats | bcc *texto*_
 ─ ۰ _${usedPrefix}comunicarpv *texto*_
 ─ ۰ _${usedPrefix}broadcastgc *texto*_
 ─ ۰ _${usedPrefix}comunicargrupos *texto*_
 ─ ۰ _${usedPrefix}borrartmp | cleartmp_
 ─ ۰ _${usedPrefix}delexp *@tag*_
 ─ ۰ _${usedPrefix}delgatacoins *@tag*_
 ─ ۰ _${usedPrefix}deldiamantes *@tag*_
 ─ ۰ _${usedPrefix}reiniciar | restart_
 ─ ۰ _${usedPrefix}ctualizar | update_
 ─ ۰ _${usedPrefix}addprem | +prem *@tag*_
 ─ ۰ _${usedPrefix}delprem | -prem *@tag*_
 ─ ۰ _${usedPrefix}listapremium | listprem_
 ─ ۰ _${usedPrefix}añadirdiamantes *@tag cantidad*_
 ─ ۰ _${usedPrefix}añadirxp *@tag cantidad*_
 ─ ۰ _${usedPrefix}añadirgatacoins *@tag cantidad*_
└──────────────────┘
`.trim()

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

conn.sendHydrated(m.chat, menu, wm, pp, 'https://velaut.carrd.co', 'Vélaut & co', null, null, [
['▪️ 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ▪️', '.allmenu'],
['▪️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ▪️', '#menu']
], m,)
	
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, `${fg}𝙀𝙍𝙍𝙊𝙍 𝙀𝙉 𝙀𝙇 𝙈𝙀𝙉𝙐, 𝙍𝙀𝙋𝙊𝙍𝙏𝘼 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#reporte*\n\n𝙀𝙍𝙍𝙊𝙍 𝙄𝙉 𝙏𝙃𝙀 𝙈𝙀𝙉𝙐, 𝙍𝙀𝙋𝙊𝙍𝙏 𝙏𝙃𝙄𝙎 𝙒𝙄𝙏𝙃 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *#report*`, m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './media/menus/Menuvid1.mp4'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
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
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who) 


let str = 
`╌╌╌───  *Vélɑut* | *Bot*  ───╌╌╌
*¡Hola! ${username}* ♡


── ▪️ *MENÚ COMPLETO | MENÚS*
┌──────────────────┐
 ─ ۰ *EXPERIENCIA | EXP ➺ ${exp}*
 ─ ۰ *NIVEL | LEVEL ➺ ${level}*
 ─ ۰ *ROL ➺* ${role}
 ─ ۰ *VÉLAUTCOINS ➺ $ ${money}*
 ─ ۰ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
└──────────────────┘

${readMore}

── ▪️ *UNIR AL GRUPO*

 ─ ۰ *¡Une a VélautBot en grupos!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}botemporal *enlace* *cantidad*_
 ─ ۰ _${usedPrefix}addbot *enlace* *cantidad*_
└──────────────────┘

── ▪️ *JUEGOS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}math | matemáticas | *modo*_
 ─ ۰ _${usedPrefix}tictactoe | tictactoe *nombre del la sala*_
 ─ ۰ _${usedPrefix}deltictactoe *nombre del la sala*_
 ─ ۰ _${usedPrefix}topgays_
 ─ ۰ _${usedPrefix}topotakus_
 ─ ۰ _${usedPrefix}toppajer@s_
 ─ ۰ _${usedPrefix}topput@s_
 ─ ۰ _${usedPrefix}topintegrantes | topintegrante_
 ─ ۰ _${usedPrefix}toplagrasa | topgrasa_
 ─ ۰ _${usedPrefix}toppanafrescos | toppanafresco_
 ─ ۰ _${usedPrefix}topshiposters | topshipost_
 ─ ۰ _${usedPrefix}toplindos | toplind@s_
 ─ ۰ _${usedPrefix}topfamosos | topfamos@s_
 ─ ۰ _${usedPrefix}topparejas | top5parejas_
 ─ ۰ _${usedPrefix}gay2 *@tag*_
 ─ ۰ _${usedPrefix}gay2 *yo*_
 ─ ۰ _${usedPrefix}gay *@tag / nombre*_
 ─ ۰ _${usedPrefix}lesbiana *@tag / nombre*_
 ─ ۰ _${usedPrefix}pajero *@tag / nombre*_
 ─ ۰ _${usedPrefix}pajera *@tag / nombre*_
 ─ ۰ _${usedPrefix}puta *@tag / nombre*_
 ─ ۰ _${usedPrefix}puto *@tag / nombre*_
 ─ ۰ _${usedPrefix}rata *@tag / nombre*_
 ─ ۰ _${usedPrefix}manco *@tag / nombre*_
 ─ ۰ _${usedPrefix}manca *@tag / nombre*_
 ─ ۰ _${usedPrefix}formarpareja | pareja5_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}verdad_
 ─ ۰ _${usedPrefix}reto_
 ─ ۰ _${usedPrefix}multijuegos_
 ─ ۰ _${usedPrefix}juegos_
 ─ ۰ _${usedPrefix}formartrio_
 ─ ۰ _${usedPrefix}love *@tag / nombre*_
 ─ ۰ _${usedPrefix}slot *cantidad*_
 ─ ۰ _${usedPrefix}ppt *piedra / papel / tijera*_
 ─ ۰ _${usedPrefix}prostituta *@tag / nombre*_
 ─ ۰ _${usedPrefix}prostituto *@tag / nombre*_
 ─ ۰ _${usedPrefix}doxxear *@tag*_
 ─ ۰ _${usedPrefix}doxxeame_
 ─ ۰ _${usedPrefix}pregunta *texto*_
 ─ ۰ _${usedPrefix}apostar | slot *cantidad*_
└──────────────────┘

── ▪️ *CHAT BOT*

 ─ ۰ *¡Tienes la Ocasión de*
 ─ ۰ *Conversar con Vélaut Bot!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}simi | okgoogle *texto*_
 ─ ۰ _${usedPrefix}alexa | siri | cortana *texto*_
 ─ ۰ _${usedPrefix}simsimi | bixby *texto*_
└──────────────────┘

── ▪️ *AJUSTES - CHATS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}on *:* off *bienvenida | welcome*_
 ─ ۰ _${usedPrefix}on *:* off *avisos | detect*_
 ─ ۰ _${usedPrefix}on *:* off *autonivel | autolevelup*_
 ─ ۰ _${usedPrefix}on *:* off *restringir | restrict*_
 ─ ۰ _${usedPrefix}on *:* off *antillamar | anticall*_
 ─ ۰ _${usedPrefix}on *:* off *publico | public*_
 ─ ۰ _${usedPrefix}on *:* off *autovisto | autoread*_
 ─ ۰ _${usedPrefix}on *:* off *temporal*_
 ─ ۰ _${usedPrefix}on *:* off *stickers*_
 ─ ۰ _${usedPrefix}on *:* off *autosticker*_
 ─ ۰ _${usedPrefix}on *:* off *reacciones | reaction*_
 ─ ۰ _${usedPrefix}on *:* off *audios*_
 ─ ۰ _${usedPrefix}on *:* off *modocaliente | modohorny*_
 ─ ۰ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
 ─ ۰ _${usedPrefix}on *:* off *antiver | antiviewonce*_
 ─ ۰ _${usedPrefix}on *:* off *antieliminar | antidelete*_
 ─ ۰ _${usedPrefix}on *:* off *antinternacional | antifake*_
 ─ ۰ _${usedPrefix}on *:* off *antienlace | antilink*_
 ─ ۰ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
 ─ ۰ _${usedPrefix}on *:* off *antitiktok | antitk*_
 ─ ۰ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
 ─ ۰ _${usedPrefix}on *:* off *antitelegram | antitel*_
 ─ ۰ _${usedPrefix}on *:* off *antifacebook | antifb*_
 ─ ۰ _${usedPrefix}on *:* off *antinstagram | antig*_
 ─ ۰ _${usedPrefix}on *:* off *antitwitter | antitw*_
 ─ ۰ _${usedPrefix}on *:* off *soloprivados | pconly*_
 ─ ۰ _${usedPrefix}on *:* off *sologrupos | gconly*_
└──────────────────┘

── ▪️ *RESUMEN GRUPO*
┌──────────────────┐
 ─ ۰ _${usedPrefix}configuracion_
 ─ ۰ _${usedPrefix}settings_
 ─ ۰ _${usedPrefix}vergrupo_
└──────────────────┘

── ▪️ *DESCARGAS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}imagen | image *texto*_
 ─ ۰ _${usedPrefix}pinterest | dlpinterest *texto*_
 ─ ۰ _${usedPrefix}wallpaper|wp *texto*_
 ─ ۰ _${usedPrefix}play | play2 *texto o link*_
 ─ ۰ _${usedPrefix}play.1 *texto o link*_
 ─ ۰ _${usedPrefix}play.2 *texto o link*_ 
 ─ ۰ _${usedPrefix}ytmp3 | yta *link*_
 ─ ۰ _${usedPrefix}ytmp4 | ytv *link*_
 ─ ۰ _${usedPrefix}pdocaudio | ytadoc *link*_
 ─ ۰ _${usedPrefix}pdocvieo | ytvdoc *link*_
 ─ ۰ _${usedPrefix}tw |twdl | twitter *link*_
 ─ ۰ _${usedPrefix}facebook | fb *link*_
 ─ ۰ _${usedPrefix}instagram *link video o imagen*_
 ─ ۰ _${usedPrefix}verig | igstalk *usuario(a)*_
 ─ ۰ _${usedPrefix}ighistoria | igstory *usuario(a)*_
 ─ ۰ _${usedPrefix}tiktok *link*_
 ─ ۰ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
 ─ ۰ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
 ─ ۰ _${usedPrefix}mediafire | dlmediafire *link*_
 ─ ۰ _${usedPrefix}clonarepo | gitclone *link*_
 ─ ۰ _${usedPrefix}clima *país ciudad*_
 ─ ۰ _${usedPrefix}consejo_
 ─ ۰ _${usedPrefix}morse codificar *texto*_
 ─ ۰ _${usedPrefix}morse decodificar *morse*_
 ─ ۰ _${usedPrefix}fraseromantica_
 ─ ۰ _${usedPrefix}historia_
└──────────────────┘

── ▪️ *CHAT ANÓNIMO*

 ─ ۰ *¡Escribe a alguien*
 ─ ۰ *de forma anónima!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}chatanonimo | anonimochat_
 ─ ۰ _${usedPrefix}anonimoch_
 ─ ۰ _${usedPrefix}start_
 ─ ۰ _${usedPrefix}next_
 ─ ۰ _${usedPrefix}leave_
└──────────────────┘

── ▪️ *CONFIGURACIÓN GRUPOS*
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
└──────────────────┘

── ▪️ *VOTACIONES EN GRUPOS*

 ─ ۰ *¡Ahora puedes hacer*
 ─ ۰ *Votaciones en Grupos!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}crearvoto | startvoto *texto*_
 ─ ۰ _${usedPrefix}sivotar | upvote_
 ─ ۰ _${usedPrefix}novotar | devote_
 ─ ۰ _${usedPrefix}vervotos | cekvoto_
 ─ ۰ _${usedPrefix}delvoto | deletevoto_
└──────────────────┘

── ▪️ *CONVERTIDORES*

 ─ ۰ *Convierte stickers en imagen,*
 ─ ۰ *Crea enlace de archivos.*
┌──────────────────┐
 ─ ۰  _${usedPrefix}toimg | img | jpg *sticker*_
 ─ ۰  _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
 ─ ۰  _${usedPrefix}tovn | vn *video o audio*_
 ─ ۰  _${usedPrefix}tovideo *audio*_
 ─ ۰  _${usedPrefix}tourl *video, imagen*_
 ─ ۰  _${usedPrefix}toenlace  *video, imagen o audio*_
 ─ ۰  _${usedPrefix}tts es *texto*_
└──────────────────┘

── ▪️ *LOGOS*
┌──────────────────┐
 ─ ۰  _${usedPrefix}logos *efecto texto*_
 ─ ۰  _${usedPrefix}menulogos2_
└──────────────────┘

── ▪️ *EFECTOS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}simpcard *@tag*_
 ─ ۰ _${usedPrefix}hornycard *@tag*_
 ─ ۰ _${usedPrefix}lolice *@tag*_
 ─ ۰ _${usedPrefix}ytcomment *texto*_
 ─ ۰ _${usedPrefix}itssostupid_
 ─ ۰ _${usedPrefix}pixelar_
 ─ ۰ _${usedPrefix}blur_
└──────────────────┘

── ▪️ *RANDOM - ANIME*
┌──────────────────┐
 ─ ۰ _${usedPrefix}chica_
 ─ ۰ _${usedPrefix}chico_
 ─ ۰ _${usedPrefix}cristianoronaldo_
 ─ ۰ _${usedPrefix}messi_
 ─ ۰ _${usedPrefix}meme2_
 ─ ۰ _${usedPrefix}itzy_
 ─ ۰ _${usedPrefix}blackpink_
 ─ ۰ _${usedPrefix}kpop *blackpink : exo : bts*_
 ─ ۰ _${usedPrefix}navidad_
 ─ ۰ _${usedPrefix}ppcouple_
 ─ ۰ _${usedPrefix}neko_
 ─ ۰ _${usedPrefix}waifu_
 ─ ۰ _${usedPrefix}akira_
 ─ ۰ _${usedPrefix}akiyama_
 ─ ۰ _${usedPrefix}anna_
 ─ ۰ _${usedPrefix}asuna_
 ─ ۰ _${usedPrefix}ayuzawa_
 ─ ۰ _${usedPrefix}boruto_
 ─ ۰ _${usedPrefix}chiho_
 ─ ۰ _${usedPrefix}chitoge_
 ─ ۰ _${usedPrefix}deidara_
 ─ ۰ _${usedPrefix}erza_
 ─ ۰ _${usedPrefix}elaina_
 ─ ۰ _${usedPrefix}eba_
 ─ ۰ _${usedPrefix}emilia_
 ─ ۰ _${usedPrefix}hestia_
 ─ ۰ _${usedPrefix}hinata_
 ─ ۰ _${usedPrefix}inori_
 ─ ۰ _${usedPrefix}isuzu_
 ─ ۰ _${usedPrefix}itachi_
 ─ ۰ _${usedPrefix}itori_
 ─ ۰ _${usedPrefix}kaga_
 ─ ۰ _${usedPrefix}kagura_
 ─ ۰ _${usedPrefix}kaori_
 ─ ۰ _${usedPrefix}keneki_
 ─ ۰ _${usedPrefix}kotori_
 ─ ۰ _${usedPrefix}kurumi_
 ─ ۰ _${usedPrefix}madara_
 ─ ۰ _${usedPrefix}mikasa_
 ─ ۰ _${usedPrefix}miku_
 ─ ۰ _${usedPrefix}minato_
 ─ ۰ _${usedPrefix}naruto_
 ─ ۰ _${usedPrefix}nezuko_
 ─ ۰ _${usedPrefix}sagiri_
 ─ ۰ _${usedPrefix}sasuke_
 ─ ۰ _${usedPrefix}sakura_
 ─ ۰ _${usedPrefix}cosplay_
└──────────────────┘

── ▪️ *MODIFICAR AUDIO*
┌──────────────────┐
 ─ ۰ _${usedPrefix}bass_
 ─ ۰ _${usedPrefix}blown_
 ─ ۰ _${usedPrefix}deep_
 ─ ۰ _${usedPrefix}earrape_
 ─ ۰ _${usedPrefix}fast_
 ─ ۰ _${usedPrefix}fat_
 ─ ۰ _${usedPrefix}nightcore_
 ─ ۰ _${usedPrefix}reverse_
 ─ ۰ _${usedPrefix}robot_
 ─ ۰ _${usedPrefix}slow_
 ─ ۰ _${usedPrefix}smooth_
 ─ ۰ _${usedPrefix}tupai_
└──────────────────┘

── ▪️ *BUSCAR*
┌──────────────────┐
 ─ ۰ _${usedPrefix}animeinfo *texto*_
 ─ ۰ _${usedPrefix}mangainfo *texto*_
 ─ ۰ _${usedPrefix}google *texto*_
 ─ ۰ _${usedPrefix}letra | lirik *texto*_
 ─ ۰ _${usedPrefix}ytsearch | yts *texto*_
 ─ ۰ _${usedPrefix}wiki | wikipedia *texto*_
└──────────────────┘

── ▪️ *HERRAMIENTAS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}afk *motivo*_
 ─ ۰ _${usedPrefix}acortar *url*_
 ─ ۰ _${usedPrefix}calc *operacion math*_
 ─ ۰ _${usedPrefix}del *respondre a mensaje del Bot*_
 ─ ۰ _${usedPrefix}qrcode *texto*_
 ─ ۰ _${usedPrefix}readmore *texto1|texto2*_
 ─ ۰ _${usedPrefix}spamwa *numero|texto|cantidad*_
 ─ ۰ _${usedPrefix}styletext *texto*_
 ─ ۰ _${usedPrefix}traducir *texto*_
 ─ ۰ _${usedPrefix}morse codificar *texto*_
 ─ ۰ _${usedPrefix}morse decodificar *morse*_
└──────────────────┘

── ▪️ *TOP VÉLAUT BOT*

 ─ ۰ *¡Averigua en que Top te encuentras!*
┌──────────────────┐
 ─ ۰ _${usedPrefix}top | lb | leaderboard_
└──────────────────┘

── ▪️ *STICKERS Y FILTROS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}sticker | s *imagen o video*_
 ─ ۰ _${usedPrefix}sticker | s *url de tipo jpg*_
 ─ ۰ _${usedPrefix}emojimix *😺+😆*_
 ─ ۰ _${usedPrefix}scircle | círculo *imagen*_
 ─ ۰ _${usedPrefix}semoji | emoji *tipo emoji*_
 ─ ۰ _${usedPrefix}attp *texto*_
 ─ ۰ _${usedPrefix}attp2 *texto*_
 ─ ۰ _${usedPrefix}ttp *texto*_
 ─ ۰ _${usedPrefix}ttp2 *texto*_
 ─ ۰ _${usedPrefix}ttp3 *texto*_
 ─ ۰ _${usedPrefix}ttp4 *texto*_
 ─ ۰ _${usedPrefix}ttp5 *texto*_
 ─ ۰ _${usedPrefix}ttp6 *texto*_
 ─ ۰ _${usedPrefix}dado_
 ─ ۰ _${usedPrefix}stickermarker *efecto : responder a imagen*_
 ─ ۰ _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 ─ ۰ _${usedPrefix}cs *:* cs2_
└──────────────────┘

── ▪️ *FIRMA STICKERS*
┌──────────────────┐
 ─ ۰ _${usedPrefix}wm *packname|author*_
 ─ ۰ _${usedPrefix}wm *texto1|texto2*_
└──────────────────┘

── ▪️ *STICKERS DINÁMICOS*

 ─ ۰ *Realiza acciones con Stickers*
 ─ ۰ *Etiquetando a alguien.*
┌──────────────────┐
 ─ ۰ _${usedPrefix}palmaditas | pat *@tag*_
 ─ ۰ _${usedPrefix}bofetada | slap *@tag*_
 ─ ۰ _${usedPrefix}golpear *@tag*_
 ─ ۰ _${usedPrefix}besar | kiss *@tag*_
 ─ ۰ _${usedPrefix}alimentar | food *@tag*_
└──────────────────┘

── ▪️ *SOLO PROPIETARIO*
┌──────────────────┐
 ─ ۰ _${usedPrefix}join *enlace*_
 ─ ۰ _${usedPrefix}unete *enlace*_
 ─ ۰ _${usedPrefix}dardiamantes *cantidad*_
 ─ ۰ _${usedPrefix}darxp *cantidad*_
 ─ ۰ _${usedPrefix}dargatacoins *cantidad*_
 ─ ۰ _${usedPrefix}cajafuerte_
 ─ ۰ _${usedPrefix}comunicar | broadcastall | bc *texto*_
 ─ ۰ _${usedPrefix}broadcastchats | bcc *texto*_
 ─ ۰ _${usedPrefix}comunicarpv *texto*_
 ─ ۰ _${usedPrefix}broadcastgc *texto*_
 ─ ۰ _${usedPrefix}comunicargrupos *texto*_
 ─ ۰ _${usedPrefix}borrartmp | cleartmp_
 ─ ۰ _${usedPrefix}delexp *@tag*_
 ─ ۰ _${usedPrefix}delgatacoins *@tag*_
 ─ ۰ _${usedPrefix}deldiamantes *@tag*_
 ─ ۰ _${usedPrefix}reiniciar | restart_
 ─ ۰ _${usedPrefix}ctualizar | update_
 ─ ۰ _${usedPrefix}addprem | +prem *@tag*_
 ─ ۰ _${usedPrefix}delprem | -prem *@tag*_
 ─ ۰ _${usedPrefix}listapremium | listprem_
 ─ ۰ _${usedPrefix}añadirdiamantes *@tag cantidad*_
 ─ ۰ _${usedPrefix}añadirxp *@tag cantidad*_
 ─ ۰ _${usedPrefix}añadirgatacoins *@tag cantidad*_
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
await conn.sendMessage(m.chat, { text: str, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, `${fg}𝙀𝙍𝙍𝙊𝙍 𝙀𝙉 𝙀𝙇 𝙈𝙀𝙉𝙐, 𝙍𝙀𝙋𝙊𝙍𝙏𝘼 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#reporte*\n\n𝙀𝙍𝙍𝙊𝙍 𝙄𝙉 𝙏𝙃𝙀 𝙈𝙀𝙉𝙐, 𝙍𝙀𝙋𝙊𝙍𝙏 𝙏𝙃𝙄𝙎 𝙒𝙄𝙏𝙃 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *#report*`, m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')} */
