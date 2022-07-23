/**
- Jangan Di Jual !!
*/

require('./settings/options/config')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var speed = require('performance-now')
var os = require('os')
var crypto = require('crypto')
var toHur = require('@develoka/angka-terbilang-js')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var { Primbon } = require('scrape-primbon')
var primbon = new Primbon() 
var textpro = require('./scrappe/textpro')
var maker = require('mumaker')
var { color, bgcolor } = require('./message/color')
var { cerpen } = require('./scrappe/cerpen')
var { mediafireDl, igstalk } = require('./message/function')
const { aiovideodl } = require('./scrappe/scraper.js')
const { TiktokDownloader } = require('./tiktokdl')
var { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./message/level')
var { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./message/rpg')
var { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat} = require('@bochilteam/scraper')
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./message/myfunc')
var { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme, Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./message/limit')

//Database
let autosticker = JSON.parse(fs.readFileSync('./database/autostick/autosticker.json'));
var _autostick = JSON.parse(fs.readFileSync('./database/autostick/autostickpc.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/savedata/list.json'));
let { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./message/list.js')
let pendaftar = JSON.parse(fs.readFileSync('./database/users/user.json'))
let data = JSON.parse(fs.readFileSync('./database/savedata/data.json'));
var _level = JSON.parse(fs.readFileSync('./database/users/level.json'))
var _petualang = JSON.parse(fs.readFileSync('./database/rpgmenu/inventori.json'))
var prem = JSON.parse(fs.readFileSync('./database/users/premium.json'))
var balance = JSON.parse(fs.readFileSync('./database/users/balance.json'))
var _registered = JSON.parse(fs.readFileSync('./database/users/registered.json'))
termux = fs.readFileSync(`./database/stick/termux.webp`) 
cangkul = fs.readFileSync(`./database/stick/cangkul.webp`) 
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let absen = db.data.others.absen = []

var wame = 'https://github.com/Lexxy24/BOTMD'
var youtube = 'https://youtube.com/channel/UCGDk88W54RJOgk6b1p42NVg'

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = neo = async (neo, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "#" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await neo.decodeJid(neo.user.id)
var isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var from = m.chat
var sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await neo.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var isAutoStick = _autostick.includes(from)
var isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
var isAutoSticker = m.isGroup ? autosticker.includes(from) : false
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
var isPrem = prem.includes(sender)
var isUser = pendaftar.includes(m.sender)
var isRegis = _registered.includes(m.sender)
var isPetualang = checkPetualangUser(m.sender)

// Waktu
var wib = moment.tz('Asia/Jakarta').format('HH:mm')
var wita = moment.tz('Asia/Makassar').format('HH:mm')
var wit = moment.tz('Asia/Jayapura').format('HH:mm')
var jangwak = moment.tz('Asia/Jakarta').format('DD/MM/YY')

// Quoted
var content = JSON.stringify(m.message)
var isImage = (m.type === 'imageMessage')
var isVideo = (m.type === 'videoMessage')
var isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
var isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
var isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
var isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
var isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
var isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
var isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
var isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
var isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
        
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
const reply = (teksnya) => {
neo.sendMessage(from, { text: teksnya },{ quoted: m});
}
const hacker = (satu, dua, tiga, empat) => {
const A = [
{buttonId: `${prefix + satu} yakin`, buttonText: {displayText: 'YAKIN!'}, type: 1},
{buttonId: `${prefix + satu} tidak`, buttonText: {displayText: 'TIDAK!'}, type: 1}]
const B = { image: {url: tiga}, caption: dua + " saat ini, apakah anda ingin hack " + dua, footerText: 'loading...', buttons: A,headerType: 4}
hack1 = fs.readFileSync(`./settings/img/${dua}2.jpg`)
hack2 = empat          
if (!q)return neo.sendMessage(from, B, {quoted:m})
if ((args[0]) === 'yakin') {	
const A = [{buttonId: `${prefix + satu} termux`, buttonText: {displayText: 'TERMUX!'}, type: 1},
{buttonId: `${prefix + satu} cangkul`, buttonText: {displayText: 'CANGKUL!'}, type: 1}]
const B = {text: `SILAHKAN PILIH METODE DI BAWAH INI`, footer: `Loading...`, buttons: A, headerType: 1}
neo.sendMessage(from, B, {quoted:m})
} else if ((args[0]) === 'tidak') {reply("Baiklah")
} else if ((args[0]) === 'termux') {neo.sendMessage(from, {sticker : termux}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `TUNGGU SEBENTAR... SEDANG HACK ${dua} MAKE TERMUX😱😤`} } }}) 	
setTimeout( () => {
neo.sendMessage(from, {image:hack1, caption:hack2}, {quoted: m})
}, 10000)  
} else if ((args[0]) === 'cangkul') {neo.sendMessage(from, {sticker : cangkul}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `TUNGGU SEBENTAR... SEDANG HACK ${dua} MAKE CANGKUL😱😤`} } }}) 	
setTimeout( () => {
neo.sendMessage(from, {image:hack1, caption:hack2}, {quoted: m})
}, 10000)  
}
};

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
  // Random Image Simple Menu
  let picaks = [flaming,fluming,flarun,flasmurf]
  let picak = picaks[Math.floor(Math.random() * picaks.length)]

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
}
	    
} catch (err) {
console.error(err)
}

// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}
var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
                                         
//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!neo.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ AUTO READ ]━━━━━━━━━━━━━━━━━//

if (m.message) {
neo.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', wib, color(`${command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
}

var sticWait = (hehe) => {
ano = fs.readFileSync('./database/stick/wait.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./database/stick/groupAdmin.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./database/stick/owner.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticPrivate = (hehe) => {
ano = fs.readFileSync('./database/stick/private.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticbotAdmin = (hehe) => {
ano = fs.readFileSync('./database/stick/botAdmin.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticGroup = (hehe) => {
ano = fs.readFileSync('./database/stick/group.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticLimit = (hehe) => {
ano = fs.readFileSync('./database/stick/limitUser.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticKick = (hehe) => {
ano = fs.readFileSync('./database/stick/LeaveGC.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticJoin = (hehe) => {
ano = fs.readFileSync('./database/stick/JoinGC.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticRegis = (hehe) => {
ano = fs.readFileSync('./database/stick/Register.webp')
neo.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return neo.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return neo.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return neo.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return neo.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return neo.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
        
//━━━━━━━━━━━━━━━[ RESET LIMIT ]━━━━━━━━━━━━━━━━━//
async function sendButLoc(from) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Source Code`, url : `https://github.com/Lexxy24/BOTMD` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemon
 × ${prefix}killdemonking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`
      neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: thumbrpg }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }

async function sendButJoin(from, query) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        _petualang.push(sender)
        fs.writeFileSync('./database/rpgmenu/inventori.json', JSON.stringify(_petualang))        
        addInventori(sender)
        addLevelingId(sender) 
        var name = args[0]
        var serialUser = createSerial(14)
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Web Store`, url : `https://www.pancagama.store` } },
		{ quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `〘 SUKSES JOIN RPG 〙
        
「 PROFILE 」
 • Nama : ${name}
 • Level : ${getLevelingLevel(sender)}
 • Status : ${elit}
 • Xp :  ${getLevelingXp(sender)}/${reqXp}
「 RPG GAME 」`
        neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgjoinrpg }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
async function sendButRegis(teks) {
                       const buttonsDefault = [
		{ quickReplyButton: { displayText: `Verify`, id: `daftar` } }]
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: creator,
                                    templateButtons: buttonsDefault, 
                                    image: {url: mnuimg}                                   
                                               }
                       return neo.sendMessage(from, buttonMessage, m)
                }

        async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
        neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgslime }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButgoblin(from) {
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imggoblin }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdevil(from) {
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdevil }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButbehemoth(from) {
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgbehemoth }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemon(from) {
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemon }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemonking(from) {
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemonking }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
  let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
  let now = Date.now();
  let distance = from - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO ]━━━━━━━━━━━━━━━━━//
if (!isCmd && m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
    var get_data_respon = getDataResponList(from, body, db_respon_list)
    if (get_data_respon.isImage === false) {
        neo.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
            quoted: m
        })
    } else {
        neo.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
            quoted: m
        })
    }
}

if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await neo.setStatus(`${neo.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}

//━━━━━━━━━━━━━━━[ FUNCTION GROUP ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await neo.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim Link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
neo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (isAutoSticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await quoted.download()
    await neo.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
    console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return
    let mediac = await quoted.download()
    await neo.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
    if (isAutoStick) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await quoted.download()
    await neo.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
    console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return
    let mediac = await quoted.download()
    await neo.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6287734276016-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${global.creator}`, orderTitle: 'Follow Instagram @pancagama.store', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

const efff = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6287734276016-1626053991@g.us" } : {})
},
message: { 
"extendedTextMessage": {
"text": "Topup Diamond Free Fire",
'jpegThumbnail': fs.readFileSync('./settings/media/topupff.jpg')
}
} 
}

const cnvrtt = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6287734276016-1626053991@g.us" } : {})
},
message: { 
"extendedTextMessage": {
"text": "Convert Saldo By JO",
'jpegThumbnail': fs.readFileSync('./settings/media/convert.jpg')
}
} 
}

const flexx = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6287734276016-1626053991@g.us" } : {})
},
message: { 
"extendedTextMessage": {
"text": `${global.creator}`,
'jpegThumbnail': fs.readFileSync('./settings/media/menu.jpg')
}
} 
}

//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: neo.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, neo.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
neo.ev.emit('messages.upsert', msg)
}
	    
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
neo.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neo.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await neo.sendText(room.x, str, m, { mentions: parseMention(str) } )
await neo.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
neo.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
neo.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) neo.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) neo.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) neo.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
neo.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) neo.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) neo.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
neo.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
luser.afkReason = ''
}

var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

var elit = 'Petualang Biasa'
if (isPrem)
{
elit = 'Petualang Pro'
}
if (isCreator)
{
elit = 'Admin Game'
}
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//
l = 1
var HB = '⊳'
var SB = '•'
var SK = '❑'
var K1 = '『'
var K2 = '』'
var YR = '⇒'
var BF = '_'
var P4 = '*'
var GK = '➛'
var HS =`*───╼[ _ALL MENU_  ]╾───*`
var H1 =`╭─╼「`
var H2 =`」`
var H3 =`${global.simbol}`
var DR =`*──────────────────*`
var H4 =`└───⭓`
var rulstext =`${require('./settings/mess/message.js').rules(prefix, l, pushname)}`
var Yy = 0
var Gy = 0
var mono = '```'

var textdona =`
${mono}Hai ${pushname}
${require('./settings/mess/message.js').donasi(prefix, l, pushname)}${mono}`

var cv1 =`
❑ *List Convert Saldo Dana*
_10k = Rp11.000_
_15k = Rp16.000_
_20k = Rp21.000_
_25k = Rp26.000_
_30k = Rp31.000_
_40k = Rp41.000_
_50k = Rp51.000_
_60k = Rp60.000_
_70k = Rp71.000_
_75k = Rp76.000_
_80k = Rp81.000_
_90k = Rp91.000_

`

var cv2 =`
❑ *List Convert Saldo Gopay*
_10k = Rp12.500_
_15k = Rp17.500_
_20k = Rp22.500_
_25k = Rp27.500_
_30k = Rp32.500_
_40k = Rp42.500_
_50k = Rp52.500_
_60k = Rp62.500_
_70k = Rp72.500_
_75k = Rp77.500_
_80k = Rp82.500_
_90k = Rp92.500_

`
var cv3 =`
❑ *List Convert Saldo Ovo*
_20k = Rp21.500_
_25k = Rp26.500_
_30k = Rp31.500_
_40k = Rp41.500_
_50k = Rp51.500_
_60k = Rp61.500_
_70k = Rp71.500_
_75k = Rp76.500_
_80k = Rp81.500_
_90k = Rp91.500_
_100k = Rp101.500_

`
var cv4 =`
❑ *List Convert Saldo LinkAja*
_10k = Rp11.500_
_20k = Rp21.500_
_25k = Rp21.500_
_30k = Rp31.500_
_40k = Rp41.500_
_50k = Rp51.500_
_60k = Rp61.500_
_70k = Rp71.500_
_75k = Rp76.500_
_80k = Rp81.500_
_90k = Rp91.500_
_100k = Rp91.500_

`

var timestamp = speed()
var latensi = speed() - timestamp
var menutext =`hjj`
var fiturr =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞⟩ *BOT WHATSAPP V.5*
║╞⟩ *BETA MULTI DEVICE*
║╞⟩ *TOTAL FITUR : 650+*
║╞⟩ *CREATED BY JO*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
${require('./settings/mess/message.js').allmenu(prefix, l, pushname)}\n*${global.packname}Bot-Md@^2.0.0*\n${mono}Simple Bot WhatsApp With Baileys Multi Device${mono}`

switch(command) {
case 'menu': case 'help':{
const timestamp = speed()
const latensi = speed() - timestamp
let mnjh =`──────────────────
  *SIMPLE BOT WHATSAPP*
──────────────────
${SK} _*INFO USER*_
♯ *Nama : ${pushname}*
♯ *Number : +${(m.sender.split('@')[0])}*
♯ *Limit : ${global.db.data.users[m.sender].limit}*
♯ *Rank : ${role}*
♯ *Status : ${elit}*
──────────────────
${SK} _*INFO BOT*_
♯ *Bot Name : ${global.botname}*
♯ *Library : BaileysMD*
♯ *Database : Mongodb*
♯ *Speed : ${latensi.toFixed(4)} Second*
♯ *Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
♯ *Waktu Server : ${wit} WIB*
♯ *Total Fitur : 550+*
♯ *Total Users : ${_registered.length}*
──────────────────
${SK} _*INFO OWNER*_
♯ *Nama : ${global.ownername}*
♯ *Number : +${global.number}*
♯ *Email : ${global.email}*
──────────────────`
let btn = [{
urlButton: {
displayText: 'Instagram Store',
url: 'https://instagram.com/pancagama.store'
}
}, {
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}, {
quickReplyButton: {
displayText: 'Rules Bot',
id: 'rules'
}
}, {
quickReplyButton: {
displayText: 'Sewa Bot',
id: 'sc'
}  
}, {
quickReplyButton: {
displayText: 'List Menu',
id: 'fitur'
}
}]
neo.send5ButImg(m.chat, mnjh, creator, mnuimg, btn)
}
break
case 'daftar': case 'verify':{
if (!q) return m.reply('Example:\n#daftar nama|umur\n\nContoh:\n#daftar Lexxy|14')
if (isRegis) return m.reply(`*Anda Telah Terdaftar Di Database*`)
fs.writeFileSync('./database/users/registered.json', JSON.stringify(_registered))
_registered.push(m.sender)
txtt1 = q.split("|")[0]
txtt2 = q.split("|")[1]
var textreg =`> *VERIFIKASI BERHASIL*
♯ *Nama : ${txtt1}*
♯ *Umur : ${txtt2}*
♯ *Number : +${(m.sender.split('@')[0])}*
♯ *Limit : ${global.db.data.users[m.sender].limit}*
♯ *Rank : ${role}*
♯ *Status : ${elit}*
♯ *Tanggal : ${jangwak}*
♯ *Jam : ${wib} WIB*`
let bbbb = [{
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}, {
quickReplyButton: {
displayText: 'List Menu',
id: 'fitur'
}
}]
neo.send5ButImg(m.chat, textreg, creator, regisimg, bbbb)
}
break
case 'latintoaksara':{
if (!q) return m.reply(`Example : ${command} Makan bang`) 
uios = await latinToAksara(q) 
m.reply(uios) 
}
break
case 'aksaratolatin':{
if (!q) return m.reply(`Example : ${command} ꦪꦺꦴꦲꦺꦴ`) 
uios = await aksaraToLatin(q) 
m.reply(uios) 
}
break
case 'tourl': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./message/uploader')
let media = await neo.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
sticLimit(from)
break
case 'speed': case 'runtime':
let timestamp = speed()
let latensi = speed() - timestamp
respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}`
m.reply(respon)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'sc': case 'script': case 'sourcecode':
teks =`
_*Sewa Bot :*_

Hubungi Admin : wa.me/6287734276016
`
m.reply(teks)
break

case 'kick': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neo.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neo.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'tes':
m.reply('_Status Online_')
break
case 'promote': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neo.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neo.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (!text) throw 'Teks Nya Mana Bos ?'
await neo.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (!text) throw 'Teks Nya Mana Bos ?'
await neo.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
             if (!q) return m.reply(`Contoh : ${prefix + command} ${global.botname}`) 
             sticWait(from)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
               neo.sendMessage(m.chat, { image: { url: anu }, caption: `*© Created By ${global.botname}*` }, { quoted: m })
             }
             sticLimit(from)
             break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await neo.downloadAndSaveMediaMessage(quoted)
await neo.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
let teks = `──── ⌜ Tag All ⌟ ────
 
 ❗ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
neo.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
neo.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}

break
case 'creategc':
if (!isCreator) return sticOwner(from)
if (!q) return m.reply(`*Contoh* :\n#creategc namagroup`)
let cret = await neo.groupCreate(args.join(" "), [])
let response = await neo.groupInviteCode(cret.id)
teks = `  「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_

https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
					sticWait(from)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
			neo.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })


					})
					sticLimit(from)
					break
case 'cekuser':
m.reply(`*Total User : ${_registered.length}*`)
break
case 'vote': {
if (!m.isGroup) return sticGroup(from)
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: creator,
buttons: buttonsVote,
headerType: 1
}
neo.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: creator,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
neo.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'fajar-news':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
})
break
case "quotes":
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
break
case "darkjoke":
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
var res = await Darkjokes()
teks = "*© Created By JO*"
neo.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
sticLimit(from)
break
case 'cnn-news':
CNNNews().then(res => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
})
break
case 'layarkaca-search':
if (!q) return m.reply('Example: \n#layarkaca-search anime') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `.•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•.`
m.reply(teks) 
})
break
case 'cnbc-news':
CNBCNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'tribun-news':
TribunNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
IndozoneNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
KompasNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'detik-news':
DetikNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'daily-news':
DailyNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'inews-news':
iNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
})
break
case 'okezone-news':
OkezoneNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'sindo-news':
SindoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
m.reply(teks) 
})
break
case 'tempo-news':
TempoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'yyy':
await sendButRegis(from)
break
case 'antara-news':
AntaraNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
/**
case 'naruto': case 'kaneki': case 'shinomiya': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                   case 'shinobu': case 'kurumi': case 'inosuke': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'zenitsu': case 'natsu': case 'genos': case 'saitama': case 'rem': {
let au = await hx.chara(`${command}`)
            let aca = au[Math.floor(Math.random() * au.length)]
            let ao = await getBuffer(aca)
         neo.sendMessage(m.chat, { image: { ao, caption: `Tuh Foto ${command}` },  quoted: m })
            }
            break
*/
case "kontan-news":
  KontanNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break
case "merdeka-news":
  MerdekaNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    neo.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break

case "jalantikus-meme":
  var res = await JalanTikusMeme()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neo.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })

break
case 'devote': {
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: creator,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
neo.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${neo.user.id}
`
neo.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) return sticGroup(from)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) throw sticbotAdmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await neo.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await neo.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await neo.sendButtonText(m.chat, buttons, `Mode Group`, creator, m)
}
}
break
case 'editinfo': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === 'open'){
await neo.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await neo.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await neo.sendButtonText(m.chat, buttons, `Mode Edit Info`, creator, m)
}
}
break
case 'setcmd': {
global.db.data.cmd = global.db.data.cmd || {}
if (!m.quoted)return m.reply(`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`)
if (!m.quoted.fileSha256)return m.reply('SHA256 Hash Missing')
if (!q)return m.reply(`Untuk Command Apa?`)
let sticker = global.db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
sticker[hash] = {
q,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(global.db.data.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${moment(value.at * 1).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*
*Locked : ${value.locked}*
`).join('\n')}
`.trim()
neo.sendTextWithMentions(m.chat, teks, m)
}
break
case 'addmsg': {
                if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return m.reply(`Example : ${prefix + command} nama file`)
                let msgs = JSON.parse(fs.readFileSync('./database/simpan/mdata.json'))
                if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./database/simpan/mdata.json', JSON.stringify(msgs))
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break

            case 'getmsg': {
                if (!text) m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
                let msgs = JSON.parse(fs.readFileSync('./database/simpan/mdata.json'))
                if (!(text.toLowerCase() in msgs)) m.reply(`'${text}' tidak terdaftar di list pesan`)
                neo.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/simpan/mdata.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
		case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./database/simpan/mdata.json'))
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./database/simpan/mdata.json', JSON.stringify(msgs))
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'antilink': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await neo.sendButtonText(m.chat, buttons, `Mode Antilink`, creator, m)
}
}
break
case 'delete': case 'del': {
if (!isCreator) return sticOwner(from)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
neo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'emojimix': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) throw `*Example :*\n${command} 😅+🤔`
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await neo.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
sticLimit(from)
break
case 'mute': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${neo.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${neo.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await neo.sendButtonText(m.chat, buttons, `Mute Bot`, creator, m)
}
}
break
case 'linkgroup': case 'linkgrup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await neo.groupInviteCode(m.chat)
neo.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./message/scraper')
		if (!text) throw 'Example :\n#style JO'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    sticLimit(from)
	    break
case 'absen': {
  if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
  if (m.chat in absen) throw `_Masih ada absen di chat ini!_\n\n*${prefix}hapusabsen* - untuk menghapus absen`
  if (!text) throw `Masukkan Alasan Melakukan absen, Example: *${prefix + command} Pagi Hari*`
  m.reply(`absen dimulai!\n\n*${prefix}hadir* - untuk ya\n*${prefix}tidakhadir* - untuk tidak\n*${prefix}cekabsen* - untuk mengecek absen\n*${prefix}hapusabsen* - untuk menghapus absen`)
  absen[m.chat] = [q, [], []]
  await sleep(1000)
  hadir = absen[m.chat][1]
  tidakhadir = absen[m.chat][2]
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
│
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
│
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonsabsen = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessageabsen = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonsabsen,
  headerType: 1
  }
  neo.sendMessage(m.chat, buttonMessageabsen)
  }
  break
  case 'hadir': {
if (!m.isGroup) return sticGroup(from)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  isabsen = absen[m.chat][1].concat(absen[m.chat][2])
  wasabsen = isabsen.includes(m.sender)
  if (wasabsen) throw 'Kamu Sudah absen'
  absen[m.chat][1].push(m.sender)
  menabsen = absen[m.chat][1].concat(absen[m.chat][2])
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonshadir = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessagehadir = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonshadir,
  headerType: 1,
  mentions: menabsen
  }
  neo.sendMessage(m.chat, buttonMessagehadir)
  }
  break
  case 'tidakhadir': {
if (!m.isGroup) return sticGroup(from)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  isabsen = absen[m.chat][1].concat(absen[m.chat][2])
  wasabsen = isabsen.includes(m.sender)
  if (wasabsen) throw 'Kamu Sudah absen'
  absen[m.chat][2].push(m.sender)
  menabsen = absen[m.chat][1].concat(absen[m.chat][2])
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonstidakhadir = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessagetidakhadir = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonstidakhadir,
  headerType: 1,
  mentions: menabsen
  }
  neo.sendMessage(m.chat, buttonMessagetidakhadir)
  }
  break
case 'listabsen':
  case 'cekabsen':
  if (!m.isGroup) return m.reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ Total: ${hadir.length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ Total: ${tidakhadir.length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen


© ${ownername}
`
  neo.sendTextWithMentions(m.chat, teks_absen, m)
  break
  case 'deleteabsen': case'delabsen': case 'hapusabsen': {
  if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  delete absen[m.chat]
  m.reply('Berhasil Menghapus Sesi absen Di Grup Ini')
  }
  break
case 'ephemeral': {
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins) return sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await neo.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await neo.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'jadian': {
if (!m.isGroup) return sticGroup(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await neo.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: menst})
}
break
case 'jodohku': {
if (!m.isGroup) return sticGroup(from)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await neo.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: ments})
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
neo.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break

case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'summersand':
case 'horrorblood':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} Cika Bot`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${global.lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By JO',
hydratedButtons: [{
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287734276016'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await neo.sendText(room.x, str, m, { mentions: parseMention(str) } )
await neo.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'tohuruf': {
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case 'cerpen-anak':{
let cerpe = await cerpen(`anak`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'wcm':
sticJoin(from)
break
case 'bye':
sticKick(from)
break
case 'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
let cerpe = await cerpen(`korea`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await neo.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'getcase':
if (!isCreator) return sticOwner(from)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("neobot.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
case 'donate': case 'donasi':
{
let btnD = [{
urlButton: {
displayText: 'Instagram Store',
url: 'https://instagram.com/pancagama.store'
}
}, {
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}]
neo.send5ButImg(m.chat, textdona, creator, qris, btnD)
}
break
case 'fitur':
{
let btnM = [{
urlButton: {
displayText: 'Instagram Store',
url: 'https://instagram.com/pancagama.store'
}
}, {
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}]
neo.send5ButImg(m.chat, fiturr, creator, fitimg, btnM)
}
break
case 'autostikergc':
case 'autostickergc':
if (!m.isGroup) return sticGroup(from)
if (!isBotAdmins) return sticbotAdmin(from)
if (!isAdmins && !isCreator) return m.reply(sticAdmin(from))
if (args.length < 1) return m.reply('autostickergc on untuk mengaktifkan\nautostickergc off untuk menonaktifkan')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Udah aktif`)
autosticker.push(from)
fs.writeFileSync('./database/autostick/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker aktif')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autostick/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker nonaktif')
}
break

case 'autostikerpc':
case 'autostickerpc':
if (m.isGroup) return sticPrivate(from)
if (args.length < 1) return m.reply('autostikerpc on untuk mengaktifkan\nautostikerpc off untuk menonaktifkan')
if (args[0]  === 'on'){
if (isAutoStick) return m.reply(`Udah aktif`)
_autostick.push(from)
fs.writeFileSync('./database/autostick/autostickpc.json', JSON.stringify(autosticker))
m.reply('autostickerpc aktif')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostick/autostickpc.json', JSON.stringify(autosticker))
m.reply('autostickerpc nonaktif')
}
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await neo.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
neo.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neo.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, neo.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neo.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neo.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, neo.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neo.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neo.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, neo.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neo.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neo.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, neo.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neo.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neo.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, neo.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neo.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neo.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, neo.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./message/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
neo.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'randomnama':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${global.lolkey}`)
m.reply(anu.result)
break
case 'goblokcek': case 'jelekcek': case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'wibucek': case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (args.length < 1) return m.reply(`Contoh :\n${prefix + command} Neobotz`)
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
neo.sendMessage(m.chat, { text: `*${command}*\n_Nama : ${args.join(" ")}_\n_Hasil : ${yn}%_` }, { quoted: m })
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
neo.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
sticLimit(from)
break
case 'ig':
case 'igdl':
case 'instagram':
if (!q) return m.reply('Linknya?')
var { igDownloader } = require('./message/igdown.js')
   res = await igDownloader(`${c}`).catch(e => {
m.reply(mess.eror)
})
console.log(res)
sendFileFromUrl(m.chat,`${res.result.link}`,`${res.result.desc}`)
break
case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 87734276016`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
			case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Jo, 18, 1, 2000, Cika, 12, 2, 2000`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Jo, 18, 1, 2000, Cika, 12, 2, 2000`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Jo, 18, 1, 2000, Cika, 12, 2, 2000`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Jo, 18, 1, 2000, Cika, 12, 2, 2000`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Jo`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Jo, 18, 1, 2000`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Jo|Cika`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${ command} 15, 10, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await neo.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./message/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await neo.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
sticLimit(from)
break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'glitch3':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
  .catch((err) => console.log(err));
sticLimit(from)
break

case '3dbox':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticLimit(from)
break


case 'drapwater': case 'water':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
    .catch((err) => console.log(err));
sticLimit(from)
break


case 'lion2': case 'lionn':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
  if(!q) return m.reply(`Penggunaan ${command} teks`)
  sticWait(from)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
     .catch((err) => console.log(err));
     sticLimit(from)
break

case 'limit':
case 'ceklimit':
lmit =`Sisa Limit Anda : *${global.db.data.users[m.sender].limit}*`
m.reply(lmit)
break
case 'papercut': case 'paper': case 'cute':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
      if(!q) return m.reply(`Penggunaan ${command} teks`)
      sticWait(from)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
         .catch((err) => console.log(err));
         sticLimit(from)
break
case 'gura':
case 'gurastick':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
sticLimit(from)
break
case 'doge':
case 'dogestick':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
sticLimit(from)
break
case 'yts': case 'ytsearch': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `› No : ${no++}\n› Type : ${i.type}\n› Video ID : ${i.videoId}\n› Title : ${i.title}\n› Views : ${i.views}\n› Duration : ${i.timestamp}\n› Upload At : ${i.ago}\n› Url : ${i.url}\n\n─────────────────\n\n`
                }
             neo.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            sticLimit(from)
            break
case 'bucinstick':
case 'bucinp' :{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
sticLimit(from)
break
case 'patrik':
case 'patrick': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
sticLimit(from)
break
case 'rpgmenu':
case 'profile':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':
if (args.length < 1) return m.reply(`Kirim perintah:\n${prefix + command} nama`)
if (!m.isGroup) return sticGroup(from)  
if (isPetualang) return m.reply('Kamu Sudah Menjadi Petualang')
await sendButJoin(from, q)
break
case 'transformer': case 'fomer': case 'trans':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
      if(!q) return m.reply(`Penggunaan ${command} teks`)
      sticWait(from)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticLimit(from)
break
   

case 'herryp': case 'potter': case 'heryy':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
       if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
       sticWait(from)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticLimit(from)
break


case 'neondevil': case 'neon': case 'devil':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
      if(!q) return m.reply(`Penggunaan ${command} teks`)
      sticWait(from)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
         .catch((err) => console.log(err));
         
         sticLimit(from)
break

case '3dstone': case 'stone':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   sticLimit(from)
   
break
case 'thunder': case 'thun':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   sticLimit(from)
break
case 'graf':
case 'graffiti':
case 'grafiti':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neo.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${global.botname}*` }, { quoted: m }))
  .catch((err) => console.log(err));
   sticLimit(from)
break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Jo, 1, 2002\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{
sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${global.lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: `${global.creator}`,
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287734276016'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} Jo, 18, 1, 2000, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Jo,19, 1, 2002`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Jo, 19, 1, 2002`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 19, 1, 2002`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                neo.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break 
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await neo.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) neo.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat':
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'tupai':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                sticWait(from)
                let media = await neo.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                neo.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${command}*`)
                } catch (e) {
                m.reply(e)
                }
                sticLimit(from)
                break
case 'pinterest': {
                sticWait(from)
		let { pinterest } = require('./message/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                neo.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break               
case 'mediafire':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return m.reply('Link nya? ')
if (!args[0].includes('mediafire')) return m.reply(`Link is not valid`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
Judul : ${baby1[0].nama}
 Link : ${baby1[0].link}
 Size : ${baby1[0].size}				
_Mengirim file..._`
m.reply(result4)
neo.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
sticLimit(from)
break
case 'loli':
case 'neko':
case 'wibu':
case 'anime':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
buffer = `https://leyscoders-api.herokuapp.com/api/nekonime?apikey=IkyOgiwara`
sticWait(from)
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
sticLimit(from)
break
case 'anonymous': {
                if (m.isGroup) return sticPrivate(from)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                neo.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await neo.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, neo.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return sticPrivate(from)
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await neo.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await neo.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
}
case 'gitclone':
case 'twitter':
case 'noppita':
m.reply('Yo Ndak Tau\nTanya Kok Tanya Saya')
break
            case 'mulai': case 'start': {
                if (m.isGroup) return sticPrivate(from)
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await neo.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, neo.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await neo.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, neo.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await neo.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, neo.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await neo.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, neo.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return sticPrivate(from)
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await neo.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await neo.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await neo.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, neo.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await neo.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, neo.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await neo.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, neo.user.name, m)
                }
                break
            }
case 'tahta':
if (!q) return m.reply(`*Example* :\n#tahta Jo`)
sticWait(from)
buffer = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'teksto':
if (!q) return m.reply(`*Example* :\n#teksto Jo`)
sticWait(from)
buffer = `https://leyscoders-api.herokuapp.com/api/textto-image?text=${q}`
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'waifu':
buffer = `https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=IkyOgiwara`
sticWait(from)
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cowner': {
if (!isCreator) return sticOwner(from)
if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case 'prem': {
if (!isCreator) return sticOwner(from)
if (!args[0]) return m.reply(`*Example* : #prem add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isPrem = premium.includes(orgnye)
if (args[0] === "add") {
if (isPrem) return m.reply('User sudah menjadi owner')
premium.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delprem = premium.indexOf(orgnye)
premium.splice(delprem, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case 'attp':
if (!q) return m.reply(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
neo.sendMessage(m.chat, { sticker: gehdhe }, { quoted: m })
break
case 'ttp':
if (!q) return m.reply(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${global.lolkey}&text=${encodeURI(q)}`)
neo.sendMessage(m.chat, { sticker: veireuue }, { quoted: m })
break
case 'apakah':
  if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
  const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
  const kah = apa[Math.floor(Math.random() * apa.length)]
  neo.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
  break
  case 'bisakah':
  if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
  const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
  const ga = bisa[Math.floor(Math.random() * bisa.length)]
  neo.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
  break
  case 'bagaimanakah':
  if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
  const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
  const ya = gimana[Math.floor(Math.random() * gimana.length)]
  neo.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
  break
  case 'rate':
  if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
  const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
  const te = ra[Math.floor(Math.random() * ra.length)]
  neo.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
  break
case 'ssweb':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return m.reply(`*Example* :\n#ssweb https://google.com`)
sticWait(from)
ssweb = `https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${q}&apikey=IkyOgiwara`
neo.sendMessage(from, {image:{url:ssweb}, caption:"Done!"}, {quoted:m})
sticLimit(from)
break             

case 'rules':
{
let rlssbtn = [{
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#sewa'
}
}]
neo.send5ButImg(m.chat, rulstext, `${global.creator}`, rulsimg, rlssbtn)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'nuliskanan':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
sticWait(from)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./database/nulis/buku/sebelumkanan.jpg','-font','./database/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./database/nulis/buku/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
               neo.sendMessage(from, { image: fs.readFileSync('./database/nulis/buku/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'nuliskiri':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
sticWait(from)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./database/nulis/buku/sebelumkiri.jpg','-font','./database/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./database/nulis/buku/setelahkiri.jpg'])
.on('error', () => m.reply('error'))
.on('exit', () => {
neo.sendMessage(from, { image: fs.readFileSync('./database/nulis/buku/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
})
}
sticLimit(from)
break
case 'foliokiri':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
 if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
sticWait(from)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./database/nulis/buku/folio/sebelumkiri.jpg','-font','./database/nulis/font/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./database/nulis/buku/folio/setelahkiri.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                neo.sendMessage(from, { image: fs.readFileSync('./database/nulis/buku/folio/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
            sticLimit(from)
                break
case 'foliokanan':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
sticWait(from)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./database/nulis/buku/folio/sebelumkanan.jpg','-font','./database/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./database/nulis/buku/folio/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                neo.sendMessage(from, { image: fs.readFileSync('./database/nulis/buku/folio/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
            sticLimit(from)
                break

case 'nulis':
if (!q) return m.reply(`Teks Nya Apa Kak?\nExample : #nulis Jo`)
let fejfjej = [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}
]
neo.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "Click Here!", "Fitur Nulis By Jo ", fejfjej, { quoted: m })
break
case 'owner': case 'creator':{
neo.sendContact(m.chat, global.owner, m)
}
break

case 'ghea':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ghea?apikey=SpyBotApi`)
neo.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
sticLimit(from)
break
case 'ukhty':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
neo.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
sticLimit(from)
break
case 'rikagusriani':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
hasifs = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/rikagusriani?apikey=SpyBotApi`)
neo.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
sticLimit(from)
break
case 'santuy':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
hasifs = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
neo.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
sticLimit(from)
break
case 'bocil':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
neo.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
sticLimit(from)
break
case 'bokep':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
neo.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
sticLimit(from)
break
case 'pantun':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
sticWait(from)
let ini = await fetchJson(`https://raku-web.herokuapp.com/api/random/pantun?apikey=RakuKeyTod`)
m.reply(ini.result.result)
sticLimit(from)
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
sticWait(from)
let media = await neo.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
neo.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tiktok':{
if (args.length < 1) return m.reply(`*Contoh* :\n#tiktok https://vt.tiktok.com/ZSdGcA6MK/?k=1`)
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
   neo.sendMessage(from, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
  break
case 'tiktokaudio':{
if (args.length < 1) return m.reply(`*Contoh* :\n#tiktok https://vt.tiktok.com/ZSdGcA6MK/?k=1`)
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    neo.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await neo.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await neo.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'tomp3': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toAudio } = require('./message/converter')
let audio = await toAudio(media, 'mp4')
neo.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${neo.user.name}.mp3`}, { quoted : m })
}
sticLimit(from)
break
case 'tomp4': case 'tovideo': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
sticWait(from)
let { webp2mp4File } = require('./message/uploader')
let media = await neo.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await neo.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
sticLimit(from)
break
case 'join': {
if (!isCreator) return sticOwner(from)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
sticWait(from)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await neo.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) return sticOwner(from)
await neo.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!q) return m.reply(`Example :\n${prefix + command} 628xxx`)
if (!isCreator) return sticOwner(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neo.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
m.reply(`Berhasil Blokir Kontak :\n${q}`)
break
case 'unblock': {
if (!q) return m.reply(`Example :\n${prefix + command} 628xxx`)
if (!isCreator) return sticOwner(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neo.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
m.reply(`Berhasil Unblock Kontak :\n${q}`)
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return sticOwner(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}, {
urlButton: {
displayText: 'Instagram Store',
url: 'https://instagram.com/pancagama.store'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
neo.send5ButImg(yoi, txt, creator, image, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'cekapikey':
if (!q) return m.reply(`Example: ${prefix + command} LolKey`)
nanih = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
xpcp =`*INFO APIKEY*
*Username : ${nanih.result.username}*
*Requests : ${nanih.result.requests}*
*Today : ${nanih.result.today}*
*Account : ${nanih.result.account_type}*
*Expired : ${nanih.result.expired}*`
m.reply(xpcp)
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return sticOwner(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await neo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Web Store',
url: 'https://www.pancagama.store'
}
}, {
urlButton: {
displayText: 'Instagram Store',
url: 'https://instagram.com/pancagama.store'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
neo.send5ButImg(i, txt, creator, image, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 neo.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await neo.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 neo.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    neo.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//Jhahaahah
case 'list':
var _0x2764ab=_0x544a;(function(_0xa6fd1a,_0x234be2){var _0x1adec7=_0x544a,_0xdd5aa3=_0xa6fd1a();while(!![]){try{var _0x220706=-parseInt(_0x1adec7(0xf6))/0x1+parseInt(_0x1adec7(0xf0))/0x2*(-parseInt(_0x1adec7(0xf5))/0x3)+parseInt(_0x1adec7(0xf2))/0x4+-parseInt(_0x1adec7(0xfa))/0x5*(parseInt(_0x1adec7(0xef))/0x6)+parseInt(_0x1adec7(0x102))/0x7+parseInt(_0x1adec7(0xfd))/0x8*(parseInt(_0x1adec7(0xee))/0x9)+parseInt(_0x1adec7(0x103))/0xa*(parseInt(_0x1adec7(0xf8))/0xb);if(_0x220706===_0x234be2)break;else _0xdd5aa3['push'](_0xdd5aa3['shift']());}catch(_0x345ac9){_0xdd5aa3['push'](_0xdd5aa3['shift']());}}}(_0x1238,0xef54f));function _0x1238(){var _0x8c7a0a=['8918305tDbgut','*\x0a*❑\x20Tanggal\x20:\x20','Click\x20Here','14506984JoigrA','Belum\x20ada\x20list\x20message\x20yang\x20terdaftar\x20di\x20group\x20ini\x0aSilahkan\x20Ketik\x20#addlist','group','split','Belum\x20ada\x20list\x20message\x20di\x20database\x0aSilahkan\x20Ketik\x20#addlist','7907907TxUzdK','80KziRht','9YheyYY','6XTWYYz','753670LVdNaM','sendMessage','793388gqJeFX','key','length','6LbdZAn','1250491GMSdjD','isGroup','2236718fJQAND','reply'];_0x1238=function(){return _0x8c7a0a;};return _0x1238();}if(!m[_0x2764ab(0xf7)])return m['reply'](mess[_0x2764ab(0xff)]);if(db_respon_list[_0x2764ab(0xf4)]===0x0)return m['reply'](_0x2764ab(0x101));if(!isAlreadyResponListGroup(from,db_respon_list))return m[_0x2764ab(0xf9)](_0x2764ab(0xfe));var arr_rows=[];function _0x544a(_0x407a76,_0x45fbc0){var _0x1238f4=_0x1238();return _0x544a=function(_0x544ae3,_0x36abfe){_0x544ae3=_0x544ae3-0xee;var _0x32d11d=_0x1238f4[_0x544ae3];return _0x32d11d;},_0x544a(_0x407a76,_0x45fbc0);}for(let x of db_respon_list){x['id']===from&&arr_rows['push']({'title':x[_0x2764ab(0xf3)],'rowId':x[_0x2764ab(0xf3)]});}var listMsg={'text':'*'+ucapanWaktu+'\x20@'+sender[_0x2764ab(0x100)]('@')[0x0]+'*\x0a*Silahkan\x20Pilih\x20Produk\x20Di\x20Bawah\x20ini*','buttonText':_0x2764ab(0xfc),'footer':'*❑\x20My\x20List\x20'+groupName+_0x2764ab(0xfb)+jangwak+'*\x0a*❑\x20Jam\x20:\x20'+time2+'*','mentions':[sender],'sections':[{'title':groupName,'rows':arr_rows}]};neo[_0x2764ab(0xf1)](from,listMsg);
break
case 'addlist':
const _0x4f7b74=_0x3142;(function(_0x362faf,_0x48ff40){const _0x55e1a2=_0x3142,_0x39cdf0=_0x362faf();while(!![]){try{const _0x38948e=-parseInt(_0x55e1a2(0xad))/0x1*(parseInt(_0x55e1a2(0xab))/0x2)+parseInt(_0x55e1a2(0xbd))/0x3*(parseInt(_0x55e1a2(0xaa))/0x4)+-parseInt(_0x55e1a2(0xb1))/0x5+parseInt(_0x55e1a2(0xac))/0x6*(-parseInt(_0x55e1a2(0xae))/0x7)+-parseInt(_0x55e1a2(0xaf))/0x8*(-parseInt(_0x55e1a2(0xb8))/0x9)+parseInt(_0x55e1a2(0xb9))/0xa*(parseInt(_0x55e1a2(0xa9))/0xb)+parseInt(_0x55e1a2(0xbc))/0xc;if(_0x38948e===_0x48ff40)break;else _0x39cdf0['push'](_0x39cdf0['shift']());}catch(_0x12fd67){_0x39cdf0['push'](_0x39cdf0['shift']());}}}(_0x21dd,0xe2b1e));if(!m[_0x4f7b74(0xbb)])return m[_0x4f7b74(0xb0)]('Khusus\x20Grup');function _0x3142(_0x42f65b,_0x40564e){const _0x21dd5e=_0x21dd();return _0x3142=function(_0x3142a8,_0x100758){_0x3142a8=_0x3142a8-0xa8;let _0x501491=_0x21dd5e[_0x3142a8];return _0x501491;},_0x3142(_0x42f65b,_0x40564e);}if(!isAdmins&&!isCreator)return m[_0x4f7b74(0xb0)](mess['admin']);var args1=q[_0x4f7b74(0xa8)]('@')[0x0],args2=q[_0x4f7b74(0xa8)]('@')[0x1];if(!q[_0x4f7b74(0xb2)]('@'))return m[_0x4f7b74(0xb0)](_0x4f7b74(0xb6)+command+_0x4f7b74(0xba)+command+_0x4f7b74(0xb3));if(isAlreadyResponList(from,args1,db_respon_list))return m['reply'](_0x4f7b74(0xb5)+args1+_0x4f7b74(0xbf));if(isImage||isQuotedImage){let {TelegraPh}=require(_0x4f7b74(0xb4)),media=await neo[_0x4f7b74(0xbe)](quoted),anu=await TelegraPh(media);addResponList(from,args1,args2,!![],''+anu,db_respon_list),m[_0x4f7b74(0xb0)](_0x4f7b74(0xb7)+args1+'*');if(fs[_0x4f7b74(0xc0)](media))fs['unlinkSync'](media);}else addResponList(from,args1,args2,![],'-',db_respon_list),m['reply'](_0x4f7b74(0xb7)+args1+'*');function _0x21dd(){const _0x30e1f8=['reply','8252425wrjFLq','includes','\x20tes@apa','./message/uploader','List\x20respon\x20dengan\x20key\x20:\x20*','Gunakan\x20dengan\x20cara\x20','Sukses\x20set\x20list\x20message\x20dengan\x20key\x20:\x20*','9dHWNAk','501740yvmnBJ','\x20*key@response*\x0a\x0a_Contoh_\x0a\x0a','isGroup','32603220AfXpMH','957753DasqRH','downloadAndSaveMediaMessage','*\x20sudah\x20ada\x20di\x20group\x20ini.','existsSync','split','275SSWNyD','12smyHxf','200ahjjML','204wsDyqn','14582LwLhBk','378329FIvGAm','7566296QAwUnd'];_0x21dd=function(){return _0x30e1f8;};return _0x21dd();}
break
case 'dellist':
var _0x230639=_0x5924;(function(_0x411c1f,_0xe0863b){var _0x4b1930=_0x5924,_0x56ee5c=_0x411c1f();while(!![]){try{var _0x56d4a6=-parseInt(_0x4b1930(0x16b))/0x1+parseInt(_0x4b1930(0x165))/0x2*(parseInt(_0x4b1930(0x16a))/0x3)+parseInt(_0x4b1930(0x166))/0x4+-parseInt(_0x4b1930(0x16d))/0x5*(parseInt(_0x4b1930(0x167))/0x6)+-parseInt(_0x4b1930(0x162))/0x7*(parseInt(_0x4b1930(0x16e))/0x8)+-parseInt(_0x4b1930(0x16c))/0x9+parseInt(_0x4b1930(0x173))/0xa;if(_0x56d4a6===_0xe0863b)break;else _0x56ee5c['push'](_0x56ee5c['shift']());}catch(_0x1cd82c){_0x56ee5c['push'](_0x56ee5c['shift']());}}}(_0x5a8b,0xcdb9c));function _0x5924(_0x14a462,_0x9ae6a8){var _0x5a8b63=_0x5a8b();return _0x5924=function(_0x5924b8,_0x5e9530){_0x5924b8=_0x5924b8-0x161;var _0x498c6c=_0x5a8b63[_0x5924b8];return _0x498c6c;},_0x5924(_0x14a462,_0x9ae6a8);}if(!m[_0x230639(0x164)])return m['reply'](_0x230639(0x170));if(!isAdmins&&!isCreator)return m[_0x230639(0x172)](mess[_0x230639(0x163)]);function _0x5a8b(){var _0x33a241=['388022RXdLto','11892681FTYBYq','4180690KmAigX','1798904LlOrUc','Gunakan\x20dengan\x20cara\x20','Khusus\x20Grup','\x20*key*\x0a\x0a_Contoh_\x0a\x0a','reply','18045550oEfSWQ','List\x20respon\x20dengan\x20key\x20*','21QAmFrN','admin','isGroup','6lbhIKo','2421056DmoQqL','6vMHXyd','Belum\x20ada\x20list\x20message\x20di\x20database','\x20hello','1652991txqrdK'];_0x5a8b=function(){return _0x33a241;};return _0x5a8b();}if(db_respon_list['length']===0x0)return m[_0x230639(0x172)](_0x230639(0x168));if(!q)return m[_0x230639(0x172)](_0x230639(0x16f)+command+_0x230639(0x171)+command+_0x230639(0x169));if(!isAlreadyResponList(from,q,db_respon_list))return m[_0x230639(0x172)](_0x230639(0x161)+q+'*\x20tidak\x20ada\x20di\x20database!');delResponList(from,q,db_respon_list),m[_0x230639(0x172)]('Sukses\x20delete\x20list\x20message\x20dengan\x20key\x20*'+q+'*');
break
case 'updatelist': case 'update':
var _0xf3a46c=_0x4dac;function _0x4dac(_0x50825c,_0x2fcd3b){var _0x4170a4=_0x4170();return _0x4dac=function(_0x4dacb3,_0x1765b9){_0x4dacb3=_0x4dacb3-0x15a;var _0x179524=_0x4170a4[_0x4dacb3];return _0x179524;},_0x4dac(_0x50825c,_0x2fcd3b);}(function(_0x35b809,_0x1ea8b3){var _0x3029b7=_0x4dac,_0x1e137f=_0x35b809();while(!![]){try{var _0x361479=parseInt(_0x3029b7(0x170))/0x1*(parseInt(_0x3029b7(0x15a))/0x2)+-parseInt(_0x3029b7(0x162))/0x3*(-parseInt(_0x3029b7(0x15b))/0x4)+-parseInt(_0x3029b7(0x15c))/0x5+-parseInt(_0x3029b7(0x15d))/0x6*(-parseInt(_0x3029b7(0x16d))/0x7)+parseInt(_0x3029b7(0x167))/0x8*(parseInt(_0x3029b7(0x165))/0x9)+parseInt(_0x3029b7(0x16b))/0xa*(-parseInt(_0x3029b7(0x160))/0xb)+-parseInt(_0x3029b7(0x15e))/0xc;if(_0x361479===_0x1ea8b3)break;else _0x1e137f['push'](_0x1e137f['shift']());}catch(_0x4b6c87){_0x1e137f['push'](_0x1e137f['shift']());}}}(_0x4170,0xd5171));if(!m[_0xf3a46c(0x163)])return m[_0xf3a46c(0x169)]('Khusus\x20Grup');function _0x4170(){var _0x354979=['unlinkSync','10uXuyyX','existsSync','7sEMAoa','\x20tes@apa','Sukses\x20update\x20list\x20message\x20dengan\x20key\x20:\x20*','43wbKgDV','7974prbuLE','4404KkQOYZ','6568980PAsvnK','6567234qVVVga','7979808CZVSVp','includes','7685953kNSORX','*\x20belum\x20terdaftar\x20di\x20group\x20ini','2094xTBfJT','isGroup','Maaf,\x20untuk\x20key\x20*','6381UZfbAx','admin','17104GJIbHI','split','reply'];_0x4170=function(){return _0x354979;};return _0x4170();}if(!isAdmins&&!isCreator)return m[_0xf3a46c(0x169)](mess[_0xf3a46c(0x166)]);var args1=q['split']('@')[0x0],args2=q[_0xf3a46c(0x168)]('@')[0x1];if(!q[_0xf3a46c(0x15f)]('@'))return m[_0xf3a46c(0x169)]('Gunakan\x20dengan\x20cara\x20'+command+'\x20*key@response*\x0a\x0a_Contoh_\x0a\x0a'+command+_0xf3a46c(0x16e));if(!isAlreadyResponListGroup(from,db_respon_list))return m[_0xf3a46c(0x169)](_0xf3a46c(0x164)+args1+_0xf3a46c(0x161));if(isImage||isQuotedImage){let media=await neo['downloadAndSaveMediaMessage'](quoted),anu=await TelegraPh(media);updateResponList(from,args1,args2,!![],''+anu,db_respon_list),m[_0xf3a46c(0x169)](_0xf3a46c(0x16f)+args1+'*');if(fs[_0xf3a46c(0x16c)](media))fs[_0xf3a46c(0x16a)](media);}else updateResponList(from,args1,args2,![],'-',db_respon_list),m[_0xf3a46c(0x169)]('Sukses\x20update\x20respon\x20list\x20dengan\x20key\x20*'+args1+'*');
break
case 'p': case 'proses':
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
proses = `「 *TRANSAKSI PENDING⏳* 」\n\n\`\`\`📆 TANGGAL : ${jangwak}\n⌚ JAM     : ${time2}\n✨ STATUS  : Pending\n🛒 PRODUK : ${(args[1])}\`\`\`\n\nPesanan ${@nama}\n\nSedang di proses!`
m.reply(proses)
            break
        case 'd': case 'done':
if (!m.isGroup) return sticGroup(from)
if (!isAdmins) return sticAdmin(from)
            sukses = `「 *TRANSAKSI BERHASIL✅* 」\n\n\`\`\`📆 TANGGAL : ${jangwak}\n⌚ JAM     : ${time2}\n✨ STATUS  : Berhasil\n🛒 PRODUK : ${(args[1])}\`\`\`\n\nTerimakasih ${(args[0])}\n\nDi Tunggu Next Order Nya🙏`
            m.reply(sukses)
            break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./message/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		neo.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break

case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: neo.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                neo.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            sticWait(from)
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./scrappe/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                neo.sendMessage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                neo.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            sticLimit(from)
            break
case 'ytmp4': case 'ytvideo':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { ytv } = require('./scrappe/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
neo.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `> Title : ${media.title}\n> File Size : ${media.filesizeF}\n> Url : ${isUrl(text)}\n> Ext : MP4\n> Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
sticLimit(from)
break
// TOP UP FREE FIRE
case 'topup5':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 5 💎
HARGA : 1.500
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%205 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup12':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 12 💎
HARGA : 2.260
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%2012 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup50':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 50 💎
HARGA : 7.300
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%2050 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup70':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 70 💎
HARGA : 9.700
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%2070 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup140':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 140 💎
HARGA : 19.200
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%20140 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup355':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 355 💎
HARGA : 47.000
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%20355 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup720':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
donte = `
ID : ${txt1}
JUMLAH : 720 💎
HARGA : 93.500
PAYMENT : QRIS

*SCAN-NOMINAL-TF*
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/media/qris.jpg') }, { upload: neo.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Konfirmasi Topup',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=KonfirmasiTopUpFreeFire\n%20ID%20${txt1}%20Nominal%20720 dm💎`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
neo.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topupff':
if (!args[0]) return m.reply(`Example : \n#topupff 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
var Yy = 0
let secmmknya = [
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `5 💎`,
"rowId": `${prefix}topup5 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `12 💎`,
"rowId": `${prefix}topup12 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `50 💎`,
"rowId": `${prefix}topup50 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `70 💎`,
"rowId": `${prefix}topup70 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `140 💎`,
"rowId": `${prefix}topup140 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `355 💎`,
"rowId": `${prefix}topup355 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `720 💎`,
"rowId": `${prefix}topup720 ${txt1}`
}
]
}
]
neo.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "Click Here!", "Topup Game By JO ", secmmknya, { quoted: efff })
break
case 'convertsaldo':
txt1 = args[0]
var Yy = 0
let cmvrtsaldo = [
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `Convert Saldo Dana`,
"rowId": `${prefix}cv1`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `Convert Saldo Gopay`,
"rowId": `${prefix}cv2`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `Convert Saldo Ovo`,
"rowId": `${prefix}cv3`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `Convert Saldo Link aja`,
"rowId": `${prefix}cv4`
}
]
}
]
neo.sendList(m.chat, `Haii ${pushname}`, `Silahkan Pilih Produk Nya\nNote : Ini Bayar Via Qris`, "Click Here!", "Convert Saldo By JO ", cmvrtsaldo, { quoted: cnvrtt })
break
case 'cv1':{
let btnC = [{
urlButton: {
displayText: 'Konfirmasi Transfer',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=Kak%20Mau%20Convert%20Saldo%20Dana`
}
}]
neo.send5ButImg(m.chat, cv1, `Convert Saldo By JO`, qris, btnC)
}
break

case 'hackmatahari': 

ingfo = `Sukses hack Matahari👍 ini dia info detail matahari saat ini\nn\n• *Suhu permukaan* : 9.999 K\n• *Massa* : 9,99999 kg\n• *Radius rata-rata* : 999.999 km\n• *Usia* : 9.999 miliar tahun\n• *Jarak ke Bumi* : 999,9 juta km\n• *Gravitasi* : 999 m/s²\n• *Bulan* : 9999 Florence, 99999 Orcus`
hacker(command, "matahari", "https://asset.kompas.com/crops/vbavZpYBxOAA83ocaYh-5_xPSf4=/98x0:698x400/750x500/data/photo/2017/08/02/4269061701.jpg", ingfo)
break
case 'hackbulan': 

ingfo = `Sukses hack bulan saat ini\n\n• *Jarak ke Bumi* : 999,999 km\n• *Luas permukaan* : 9,999×999 km2 (9,999 Bumi)\n• *Apogee* : 999,999 km; (9,9999 AU)\n• *Bujur node menaik* : Mundur satu revolusi dalam 99,9 tahun\n• *Diameter sudut* : 9,99 sampai 99,9 menit busur\n• *Eksentrisitas* : 9,9999\n• *Gravitasi permukaan* : 9,999 m/s2 (9,9999 g)`
hacker(command, "bulan", "https://media.suara.com/pictures/653x366/2014/10/02/shutterstock_67681837-e1412258071910.jpg", ingfo)
break
case 'hackbapak': 

ingfo = `Sukses hack bapak dalam keadaan tersenyum, selamat bapak ini sudah resmi menjadi milik anda, jika anda tidak ingin menerima bapak ini silahkan donasi kan saja bapak ini ke anak yang membutuhkan\n\n• Nama : Jamaluddin\n• tanggal lahir : 1990\n• Alamat : Bogor\n• Jenis Kelamin : pria\n• Agama : Gatau\n• Berat badan : 99kg\n• Tinggi Badan : 2km\n• Hobi : gay`
hacker(command, "bapak", "https://i.ibb.co/xS9DB0p/Bapak-Ganteng-on-Instagram-Selamat-pagi-sahabat-Bapak-nikmat-sehat-dan-nikmat-iman-adalah-rejeki-pal.jpg", ingfo)
break
case 'hacksatelit': 

ingfo = `Sukses hack satelit!! sekarang satelit berada 99.999 km (99.999 mil) di atas ekuator Bumi dan tidak lagi mengikuti arah rotasi bumi.`
hacker(command, "satelit", "https://asset.kompas.com/crops/jjqenjpiePG-jrwkYny11L8CDmo=/0x0:1906x1271/750x500/data/photo/2021/06/03/60b8d58df2157.jpg", ingfo)
break
case 'hackbts': 

ingfo = `Sukses hack bts!!\nHmm saya tidak tau mau berkata apa lagi...`
hacker(command, "bts", "https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial/BTS-20210612062314.jpg", ingfo)
break
case 'hackfreefire': 

ingfo = `Sukses hack freefire!! dan saya sudah mengubah info apk nya seperti di bawah ini\n\n• Tanggal rilis awal: ndak tau\n• Pengembang: ndak tau\n• Penerbit: anda\n• Mode: Permainan gajlss\n• Engine: ndak tau\n• Genre: echi, harem\n• Platform: ndak tau.`
hacker(command, "freefire", "https://asset.kompas.com/crops/FZOLNy5SigKjiRNh8q2cJ9Chjic=/151x0:1231x720/375x240/data/photo/2020/06/25/5ef405986c087.jpg", ingfo)
break
case 'hacklautan': 

ingfo = `Sukses hack lautan!! sekarang lautan telah berubah warna😱😤🤯.`
hacker(command, "lautan", "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/11/06/4089587690.jpg", ingfo)
break
case 'cv2':{
let btnC = [{
urlButton: {
displayText: 'Konfirmasi Transfer',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=Kak%20Mau%20Convert%20Saldo%20Gopay`
}
}]
neo.send5ButImg(m.chat, cv2, `Convert Saldo By JO`, qris, btnC)
}
break
case 'cv3':{
let btnC = [{
urlButton: {
displayText: 'Konfirmasi Transfer',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=Kak%20Mau%20Convert%20Saldo%20Ovo`
}
}]
neo.send5ButImg(m.chat, cv3, `Convert Saldo By JO`, qris, btnC)
}
break
case 'cv4':{
let btnC = [{
urlButton: {
displayText: 'Konfirmasi Transfer',
url: `https://api.whatsapp.com/send/?phone=6283834558105&text=Kak%20Mau%20Convert%20Saldo%20Link%20Aja`
}
}]
neo.send5ButImg(m.chat, cv4, `Convert Saldo By JO`, qris, btnC)
}
break
case 'quest':
let sectionnya= [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
]
neo.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Rpg Game By JO ", sectionnya, { quoted: m})
break
case 'slime':
case 'killslime':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButslime(from)
break
case 'goblin':
case 'killgoblin':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButgoblin(from)
break
case 'devil':
case 'killdevil':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButdevil(from)
break
case 'behemoth':
case 'killbehemoth':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButbehemoth(from)
break
case 'killdemon':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButdemon(from)
break
case 'demonking':
case 'killdemonking':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
await sendButdemonking(from)
break
case 'mining':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt Sedang Menguli . . .')
setTimeout( () => {
butkie = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
neo.sendButtonText(m.chat, butkie, `Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`, neo.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: '🚧 Selesai Menguli . . .🪙👷' }, { quoted: m })
}, 7000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: '🚧 Menemukan Emas . . .⚒️🏔️️️' }, { quoted: m })
}, 4000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: '🚧 Mulai Menambang . . .⚒️🏔️️' }, { quoted: m })
}, 1500) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: mining }, {quoted: m}) 
}, 0) // 1000 = 1s,
break
case 'inventori':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttonnss = [
{ buttonId: '#adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
neo.sendButtonText(m.chat, buttonnss, `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`, neo.user.name, m)
break
case 'mancing':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`
        neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: cing }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => m.reply(mess.error))
}, 6000)
setTimeout( () => {
neo.sendMessage(from, { text: 'Berhasil Mendapatkan Ikan . . .' }, { quoted: m })
}, 5000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: '🎣 Menarik Kail. . .' }, { quoted: m })
}, 3000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: '🎣 Mulai Memancing . . .' }, { quoted: m })
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'luckyday':
case 'luckytime':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
butluck = [
{ buttonId: `${command}`, buttonText: { displayText: `Next Lucky` }, type: 1 }
]
neo.sendButtonText(m.chat, butluck, `🎰 Lucky\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`, neo.user.name, m)
}
break
case 'adventure':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./message/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`
        neo.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `Rpg Game By JO`, mentions: [sender] })
        .catch ((err) => m.reply(mess.error))
}, 7000)
setTimeout( () => {
neo.sendMessage(from, { text: `Awass` }, { quoted: m })
}, 5000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: `Tiba Tiba Ada ${sesuatu}` }, { quoted: m })
}, 3000) // 1000 = 1s,
setTimeout( () => {
neo.sendMessage(from, { text: `${pushname} Sedang Bertualang` }, { quoted: m })
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'sellikan':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return m.reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttotons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
neo.sendButtonText(m.chat, buttotons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`,  neo.user.name, m)
break
case 'sellbesi':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return m.reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
butbes = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
neo.sendButtonText(m.chat, butbes, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`, neo.user.name, m)
break
case 'sellemas':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return m.reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
butem = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
neo.sendButtonText(m.chat, butem, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`, neo.user.name, m)
break 
case 'selldiamond':
if (!m.isGroup) return sticGroup(from) 
if (!isPetualang) return m.reply(mess.noPetualang)
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return m.reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
butdi = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
neo.sendButtonText(m.chat, butdi, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`, neo.user.name, m)
break 
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator) return sticOwner(from)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return sticOwner(from)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
	if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
neo.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
