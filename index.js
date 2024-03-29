require('./settings/options/config')
const { default: neoxyConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState(`./database/session/${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor } = require('./message/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./message/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./message/myfunc')

baterai = 'unknown'
charging = 'unknown'
blocked = []
global.blocked

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.db = JSON.parse(fs.readFileSync(`database/savedata/data.json`))
global.db.data = {
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db.data || {})
}
  
async function startneoxy() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const neoxy = neoxyConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Cika Bot - MD','Safari','1.0.0'],
        auth: state,
        version
    })
    
store.bind(neoxy.ev)

neoxy.ws.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

neoxy.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await neoxy.sendContact(callerId, global.owner)
    neoxy.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : pa7rick })
    await sleep(8000)
    await neoxy.updateBlockStatus(callerId, "block")
    }
    })
    
neoxy.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!neoxy.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(neoxy, mek, store)
require("./neobot")(neoxy, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
    
neoxy.ev.on('group-participants.update', async (anu) => {
console.log(anu)
        try {
            let metadata = await neoxy.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                try {
                    ppuser = await neoxy.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                try {
                    ppgroup = await neoxy.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

cangton = `
*Irasshaimase* @${num.split("@")[0]} 👋
_*Welcome To My Group :*_
® ${metadata.subject}

*_JANGAN LUPA INTRO_*
️Nama :
Umur :
Hobby :
Gender :
Asal Kota :
`

cangtion = `
*Sayonara* @${num.split("@")[0]} 👋
*Bye*
` 
let nama = await neoxy.getName(num)
memb = metadata.participants.length
let vtbtn = [{
quickReplyButton: {
displayText: 'Welcome 👋',
id: '#wcm'
}
}]
let bkgc = [{
quickReplyButton: {
displayText: 'Sayonara 👋',
id: '#bye'
}
}]                  

Welcome = await getBuffer(`https://leyscoders-api.herokuapp.com/api/welcome?name=${nama}&group=${encodeURIComponent(metadata.subject)}&profile=${ppuser}&apikey=IkyOgiwara`)
Left = await getBuffer(`https://leyscoders-api.herokuapp.com/api/leave?name=${nama}&group=${encodeURIComponent(metadata.subject)}&profile=${ppuser}&apikey=IkyOgiwara`)

                if (anu.action == 'add') {
                    neoxy.sendButWel(anu.id, cangton, `© Created By JO `, Welcome, vtbtn)
                } else if (anu.action == 'remove') {
                   neoxy.sendButWel(anu.id, cangtion, `© Created By JO `, Left, bkgc)
                }
            }
        } catch (err) {
            console.log(err)
        }
    })

neoxy.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
neoxy.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = neoxy.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })
    
neoxy.getName = (jid, withoutContact  = false) => {
        id = neoxy.decodeJid(jid)
        withoutContact = neoxy.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = neoxy.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === neoxy.decodeJid(neoxy.user.id) ?
            neoxy.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
neoxy.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

neoxy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await neoxy.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await neoxy.getName(i + '@s.whatsapp.net')}\nFN:${await neoxy.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${email}\nitem2.X-ABLabel:Email\nitem3.URL:${instagram}\nitem3.X-ABLabel:YouTube\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	neoxy.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
neoxy.setStatus = (status) => {
        neoxy.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    
neoxy.public = true

neoxy.serializeM = (m) => smsg(neoxy, m, store)

neoxy.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); neoxy.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startneoxy(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startneoxy(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); neoxy.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); neoxy.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startneoxy(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startneoxy(); }
            else neoxy.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })
    
neoxy.ev.on('creds.update', saveState)

neoxy.ev.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
neoxy.ev.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

neoxy.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
    let message = await prepareWAMessageMedia({ video: fs.readFileSync('./Image/neoxy.mp4'), gifPlayback: true }, { upload: neoxy.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            neoxy.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
neoxy.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: neoxy.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            neoxy.relayMessage(jid, template.message, { messageId: template.key.id })
    }
neoxy.sendButWel = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: neoxy.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            neoxy.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
neoxy.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: neoxy.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            neoxy.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
neoxy.send5Loc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
               "hydratedContentText": text,
               "locationMessage": {
               "jpegThumbnail": img },
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            neoxy.relayMessage(jid, template.message, { messageId: template.key.id })
    }

neoxy.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        listMessage :{
               title: title,
               description: text,
               buttonText: buttext,
               footerText: footer,
               listType: "  SELECT  ",
               sections: but,
               listType: 1
            }
            }), options)
            neoxy.relayMessage(jid, template.message, { messageId: template.key.id })
    }

neoxy.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        neoxy.sendMessage(jid, buttonMessage, { quoted, ...options })
    }

neoxy.sendText = (jid, text, quoted = '', options) => neoxy.sendMessage(jid, { text: text, ...options }, { quoted })

neoxy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await neoxy.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

neoxy.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await neoxy.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

neoxy.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await neoxy.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

neoxy.sendTextWithMentions = async (jid, text, quoted, options = {}) => neoxy.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

neoxy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await neoxy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

neoxy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await neoxy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
   
neoxy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

neoxy.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
	return buffer
     }
     
neoxy.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await neoxy.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await neoxy.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
       
       
neoxy.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await neoxy.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
    
neoxy.cMod = (jid, copy, text = '', sender = neoxy.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === neoxy.user.id
        return proto.WebMessageInfo.fromObject(copy)
    }
    
neoxy.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }
    }

    return neoxy
}

startneoxy()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})