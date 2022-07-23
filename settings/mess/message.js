/**
 - Hati Hati Ntar Error
**/

l = 1
let HB = '⊳'
let SB = '•'
let SK = '❏'
let K1 = '『'
let K2 = '』'
let YR = '⇒'
let BF = '_'
let P4 = '```'
let GK = '➛'
let HS =`*───╼[ _ALL MENU_  ]╾───*`
let H1 =`╭─╼⭓「 `
let H2 =` 」`
let H3 =`${global.sp}`
let DR =`*──────────────────*`
let H4 =`└───⭓`
let mono = '```'
let J1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[`
let J4 =`]`
let J3 =`┃╰──────────────────
╚━══━══━══━══━══━══━`
let J2 =`┃│⭓`

// PEMBATAS

exports.rules = (prefix, I, pushname) => {
return `
1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok saya chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan NEO-MD
😖🙏
`
}

exports.donasi = (prefix, I, pushname) => {
return `
Mau Donasi Bot Ya?
Kalo Bener Mksih Telah Support Bot
Agar Bot Tetep Online Dan Update Terus
Dana : 0877-3427-6016
Ovo : 0877-3427-6016
Qris : Scan Di Atas Kak
`
}
exports.allmenu = (prefix, I, pushname) => {
return `${P4}━══━══━══━══━══━══━${P4}
${J1} *OTHERS* *MENU* ${J4}\n${P4}${J2} #sc\n${J2} #script\n${J2} #sourcecode\n${J2} #rules\n${J2} #menu\n${J2} #ping\n${J2} #listpc\n${J2} #speed\n${J2} #cekapikey\n${J2} #runtime\n${J2} #listgc\n${J2} #limit\n${J2} #owner\n${J2} #ceklimit\n${J2} #listonline${P4}
${J3}
${J1} *OWNER* *MENU* ${J4}\n${P4}${J2} #join\n${J2} #leave\n${J2} #creategc\n${J2} #block\n${J2} #unblock\n${J2} #bc\n${J2} #bcgc\n${J2} #getcase\n${J2} #del\n${J2} #delete\n${J2} #autostikerpc on\n${J2} #autostikerpc off\n${J2} #cowner add 628xxx\n${J2} #cowner del 628xxx\n${J2} #prem add 628xxx\n${J2} #prem del 628xxx${P4}
${J3}
${J1} *STORE* *MENU* ${J4}\n${P4}${J2} #list\n${J2} #dellist key\n${J2} #addlist key@produk\n${J2} #update key@produk\n${J2} #proses @tag produk\n${J2} #done @tag produk${P4}
${J3}
${J1} *GROUP* *MENU* ${J4}\n${P4}${J2} #kick\n${J2} #add\n${J2} #promote\n${J2} #demote\n${J2} #setname\n${J2} #setdesc\n${J2} #setppgrup\n${J2} #tagall\n${J2} #hidetag\n${J2} #vote\n${J2} #upvote\n${J2} #devote\n${J2} #hadir\n${J2} #absen\n${J2} #tidakhadir\n${J2} #deleteabsen\n${J2} #hapusabsen\n${J2} #listabsen\n${J2} #cekabsen\n${J2} #linkgc\n${J2} #linkgrup\n${J2} #linkgroup\n${J2} #cekvote\n${J2} #delvote\n${J2} #group\n${J2} #editinfo\n${J2} #antilink\n${J2} #autostikergc on\n${J2} #autostikergc on${P4}
${J3}
${J1} *ANONYMOUS* *MENU* ${J4}\n${P4}${J2} #start\n${J2} #mulai\n${J2} #lanjut\n${J2} #next\n${J2} #anonymous${P4}
${J3}
${J1} *NULIS* *MENU* ${J4}\n${P4}${J2} #nulis\n${J2} #nuliskanan\n${J2} #nuliskiri\n${J2} #foliokanan\n${J2} #foliokiri${P4}
${J3}
${J1} *SEARCH* *MENU* ${J4}\n${P4}${J2} #loli\n${J2} #neko\n${J2} #wibu\n${J2} #anime\n${J2} #tahta\n${J2} #teksto\n${J2} #waifu\n${J2} #ssweb\n${J2} #pantun\n${J2} #quotes\n${J2} #darkjoke\n${J2} #gitclone\n${J2} #twitter\n${J2} #noppita\n${J2} #fajar-news\n${J2} #cnn-news\n${J2} #layarkaca-search\n${J2} #cnbc-news\n${J2} #tribun-news\n${J2} #indozone-news\n${J2} #kompas-news\n${J2} #detik-news\n${J2} #daily-news\n${J2} #inews-news\n${J2} #okezone-news\n${J2} #sindo-news\n${J2} #tempo-news\n${J2} #antara-news\n${J2} #kontan-news\n${J2} #merdeka-news\n${J2} #jalantikus-meme${P4}
${J3}
${J1} *DOWNLOAD* *MENU* ${J4}\n${P4}${J2} #yts\n${J2} #play\n${J2} #ytplay\n${J2} #ytmp3\n${J2} #ytmp4\n${J2} #tiktok\n${J2} #pinterest\n${J2} #mediafire\n${J2} #ytsearch\n${J2} #tiktokaudio\n${J2} #tiktoknowm${P4}
${J3}
${J1} *DATABASE* *MENU* ${J4}\n${P4}${J2} #listcmd\n${J2} #setcmd\n${J2} #addmsg\n${J2} #getmsg\n${J2} #delmsg\n${J2} #listmsg${P4}
${J3}
${J1} *HACKER* *MENU* ${J4}\n${P4}${J2} #hackbts\n${J2} #hackbulan\n${J2} #hackbapak\n${J2} #hacklautan\n${J2} #hacksatelit\n${J2} #hackfreefire\n${J2} #hackmatahari${P4}
${J3}
${J1} *CONVERT* *MENU* ${J4}\n${P4}${J2} #attp\n${J2} #sticker\n${J2} #style\n${J2} #smeme\n${J2} #stickmeme\n${J2} #stickermeme\n${J2} #toimage\n${J2} #emojimix\n${J2} #tovideo\n${J2} #tourl\n${J2} #tomp3\n${J2} #bass\n${J2} #blown\n${J2} #deep \n${J2} #earrape \n${J2} #fast \n${J2} #fat\n${J2} #Tohuruf 467\n${J2} #nightcore \n${J2} #reverse \n${J2} #robot \n${J2} #slow \n${J2} #smooth \n${J2} #tupai\n${J2} #latintoaksara\n${J2} #aksaratolatin${P4}
${J3}
${J1} *STICKER* *MENU* ${J4}\n${P4}${J2} #bucinp\n${J2} #bucinstick\n${J2} #gura\n${J2} #gurastick\n${J2} #doge\n${J2} #dogestick\n${J2} #patrik\n${J2} #patrick${P4}
${J3}
${J1} *ANIME* *MENU* ${J4}\n${P4}${J2} #cry\n${J2} #kill\n${J2} #hug\n${J2} #pat\n${J2} #lick\n${J2} #kiss\n${J2} #bite\n${J2} #yeet\n${J2} #neko\n${J2} #bully\n${J2} #bonk\n${J2} #wink\n${J2} #poke\n${J2} #nom\n${J2} #slap\n${J2} #smile\n${J2} #wave\n${J2} #awoo\n${J2} #blush\n${J2} #smug\n${J2} #glomp\n${J2} #happy\n${J2} #dance\n${J2} #cringe\n${J2} #highfive\n${J2} #shinobu\n${J2} #megumin\n${J2} #handhold\n${J2} #chiisaihentai\n${J2} #trap\n${J2} #blowjob\n${J2} #yaoi\n${J2} #ecchi\n${J2} #ahegao\n${J2} #hololewd\n${J2} #sideoppai\n${J2} #animefeets\n${J2} #animebooty\n${J2} #animethighss\n${J2} #hentaiparadise\n${J2} #animearmpits\n${J2} #hentaifemdom\n${J2} #lewdanimegirls\n${J2} #biganimetiddies\n${J2} #animebellybutton\n${J2} #hentai4everyone${P4}
${J3}
${J1} *PRIMBON* *MENU* ${J4}\n${P4}${J2} #randomnama\n${J2} #nomerhoki\n${J2} #nomorhoki\n${J2} #artimimpi\n${J2} #tafsirmimpi\n${J2} #ramalanjodoh\n${J2} #ramaljodoh\n${J2} #ramalanjodohbali\n${J2} #ramaljodohbali\n${J2} #suamiistri\n${J2} #ramalancinta\n${J2} #ramalcinta\n${J2} #artinama\n${J2} #kecocokannama\n${J2} #cocoknama\n${J2} #kecocokanpasangan\n${J2} #cocokpasangan\n${J2} #pasangan\n${J2} #jadianpernikahan\n${J2} #jadiannikah\n${J2} #sifatusaha\n${J2} #rejeki\n${J2} #rezeki\n${J2} #pekerjaan\n${J2} #kerja\n${J2} #ramalannasib\n${J2} #ramalnasib\n${J2} #nasib\n${J2} #potensipenyakit\n${J2} #penyakit\n${J2} #artitarot\n${J2} #tarot\n${J2} #fengshui\n${J2} #haribaik\n${J2} #harisangar\n${J2} #taliwangke\n${J2} #harinaas\n${J2} #harisial\n${J2} #nagahari\n${J2} #harinaga\n${J2} #arahrejeki\n${J2} #arahrezeki\n${J2} #peruntungan\n${J2} #weton\n${J2} #wetonjawa\n${J2} #sifat\n${J2} #karakter\n${J2} #keberuntungan\n${J2} #memancing\n${J2} #masasubur${P4}
${J3}
${J1} *CANVAS* *MENU* ${J4}\n${P4}${J2} #glitch3 text1|text2\n${J2} #herryp text1|text2\n${J2} #potter text1|text2\n${J2} #heryy text1|text2\n${J2} #graf text1|text2\n${J2} #grafiti text1|text2\n${J2} #graffiti text1|text2${P4}
${J3}
${J1} *MAKER* *MENU* ${J4}\n${P4}${J2} #3dbox nama\n${J2} #water nama\n${J2} #drapwater nama\n${J2} #lion2 nama\n${J2} #lionn nama\n${J2} #cute nama\n${J2} #paper nama\n${J2} #papercut nama\n${J2} #transformer nama\n${J2} #fomer nama\n${J2} #trans nama\n${J2} #neon nama\n${J2} #devil nama\n${J2} #neondevil nama\n${J2} #stone nama\n${J2} #3dstone nama\n${J2} #thun nama\n${J2} #thunder nama\n${J2} #neon nama\n${J2} #greenneon nama\n${J2} #advanceglow nama\n${J2} #futureneon nama\n${J2} #sandwriting nama\n${J2} #sandsummer nama\n${J2} #sandengraved nama\n${J2} #metaldark nama\n${J2} #holographic nama\n${J2} #text1917 nama\n${J2} #minion nama\n${J2} #deluxesilver nama\n${J2} #newyearcard nama\n${J2} #bloodfrosted nama\n${J2} #halloween nama\n${J2} #jokerlogo nama\n${J2} #fireworksparkle nama\n${J2} #natureleaves nama\n${J2} #bokeh nama\n${J2} #box3d nama\n${J2} #roadwarning nama\n${J2} #breakwall nama\n${J2} #icecold nama\n${J2} #luxury nama\n${J2} #summersand nama\n${J2} #horrorblood nama${P4}
${J3}
${J1} *TEXTPRO* *MENU* ${J4}\n${P4}${J2} #candy \n${J2} #christmas \n${J2} #3dchristmas \n${J2} #sparklechristmas\n${J2} #deepsea \n${J2} #scifi \n${J2} #rainbow \n${J2} #waterpipe \n${J2} #spooky \n${J2} #pencil \n${J2} #circuit \n${J2} #discovery \n${J2} #metalic \n${J2} #fiction \n${J2} #demon \n${J2} #transformer \n${J2} #berry \n${J2} #thunder \n${J2} #magma \n${J2} #3dstone \n${J2} #neonlight \n${J2} #glitch \n${J2} #harrypotter \n${J2} #brokenglass\n${J2} #papercut \n${J2} #watercolor\n${J2} #multicolor \n${J2} #neondevil \n${J2} #underwater \n${J2} #graffitibike\n${J2} #snow \n${J2} #cloud \n${J2} #honey \n${J2} #ice \n${J2} #fruitjuice \n${J2} #biscuit \n${J2} #wood \n${J2} #chocolate \n${J2} #strawberry \n${J2} #matrix \n${J2} #blood \n${J2} #dropwater \n${J2} #toxic \n${J2} #lava \n${J2} #rock \n${J2} #bloodglas \n${J2} #hallowen \n${J2} #darkgold \n${J2} #joker \n${J2} #wicker\n${J2} #firework \n${J2} #skeleton \n${J2} #blackpink \n${J2} #sand \n${J2} #glue \n${J2} #1917 \n${J2} #leaves${P4}
${J3}
${J1} *SOUND* *MENU* ${J4}\n${P4}${J2} #sound1\n${J2} #sound2\n${J2} #sound3\n${J2} #sound4\n${J2} #sound5\n${J2} #sound6\n${J2} #sound7\n${J2} #sound8\n${J2} #sound9\n${J2} #sound10\n${J2} #sound11\n${J2} #sound12\n${J2} #sound13\n${J2} #sound14\n${J2} #sound15\n${J2} #sound16\n${J2} #sound17\n${J2} #sound18\n${J2} #sound19\n${J2} #sound20\n${J2} #sound21\n${J2} #sound22\n${J2} #sound23\n${J2} #sound24\n${J2} #sound25\n${J2} #sound26\n${J2} #sound27\n${J2} #sound28\n${J2} #sound29\n${J2} #sound30\n${J2} #sound31\n${J2} #sound32\n${J2} #sound33\n${J2} #sound34\n${J2} #sound35\n${J2} #sound36\n${J2} #sound37\n${J2} #sound38\n${J2} #sound39\n${J2} #sound40\n${J2} #sound41\n${J2} #sound42\n${J2} #sound43\n${J2} #sound44\n${J2} #sound45\n${J2} #sound46\n${J2} #sound47\n${J2} #sound48\n${J2} #sound49\n${J2} #sound50\n${J2} #sound51\n${J2} #sound52\n${J2} #sound53\n${J2} #sound54\n${J2} #sound55\n${J2} #sound56\n${J2} #sound57\n${J2} #sound58\n${J2} #sound59\n${J2} #sound60\n${J2} #sound61\n${J2} #sound62\n${J2} #sound63\n${J2} #sound64\n${J2} #sound65\n${J2} #sound66\n${J2} #sound67\n${J2} #sound68\n${J2} #sound69\n${J2} #sound70\n${J2} #sound71\n${J2} #sound72\n${J2} #sound73\n${J2} #sound74${P4}
${J3}
${J1} *ASUPAN* *MENU* ${J4}\n${P4}${J2} #ghea\n${J2} #ukhty\n${J2} #rikagusriani\n${J2} #santuy\n${J2} #bocil\n${J2} #bokep\n${J2} #storyanime${P4}
${J3}
${J1} *CERPEN* *MENU* ${J4}\n${P4}${J2} #cerpen\n${J2} #ceritahoror\n${J2} #cerpen-sejarah\n${J2} #cerpen-sedih\n${J2} #cerpen-sastra\n${J2} #cerpen-romantis\n${J2} #cerpen-rohani\n${J2} #cerpen-rindu\n${J2} #cerpen-remaja\n${J2} #cerpen-ramadhan\n${J2} #cerpen-petualangan\n${J2} #cerpen-persahabatan\n${J2} #cerpen-perpisahan\n${J2} #cerpen-perjuangan\n${J2} #cerpen-penyesalan\n${J2} #cerpen-pengorbanan\n${J2} #cerpen-pengalaman\n${J2} #cerpen-pendidikan\n${J2} #cerpen-penantian\n${J2} #cerpen-patahhati\n${J2} #cerpen-olahraga\n${J2} #cerpen-nasionalisme\n${J2} #cerpen-nasihat\n${J2} #cerpen-motivasi\n${J2} #cerpen-misteri\n${J2} #cerpen-mengharukan\n${J2} #cerpen-malaysia\n${J2} #cerpen-liburan\n${J2} #cerpen-kristen\n${J2} #cerpen-korea\n${J2} #cerpen-kisahnyata\n${J2} #cerpen-keluarga\n${J2} #cerpen-kehidupan\n${J2} #cerpen-jepang\n${J2} #cerpen-inspiratif\n${J2} #cerpen-gokil\n${J2} #cerpen-galau\n${J2} #cerpen-cintasejati\n${J2} #cerpen-cintasegitiga\n${J2} #cerpen-cintasedih\n${J2} #cerpen-cintaromantis\n${J2} #cerpen-cintapertama\n${J2} #cerpen-cintaislami\n${J2} #cerpen-cinta\n${J2} #cerpen-budaya\n${J2} #cerpen-bahasasunda\n${J2} #cerpen-bahasajawa\n${J2} #cerpen-bahasainggris\n${J2} #cerpen-bahasadaerah\n${J2} #cerpen-anak${P4}
${J3}
`
}
