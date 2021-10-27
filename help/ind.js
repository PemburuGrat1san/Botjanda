const fs = require('fs')


exports.ok = () => {
    return `Ok desu~`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.groupBot = (sender) => {
    return `
Link Group NekoBotz : https://chat.whatsapp.com/GjfZOzI5gRRF4llaMQT75C
Link Group NekoBotzV2 : https://chat.whatsapp.com/FIsqb8i1zaXJ9upvQuiHWz


Jangan lupa join ya kak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, jumlahHarian, jumlahCommand, sender, time, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]} 😳\`\`\`

╭── 「 *BOT INFO* 」 ──
│
│❒͡  _*NEKOBOTZ*_ 
│❒͡ *Contact My Owner*
│ *https://wa.me/${owner}*
│❒͡ *Time: ${time}*
│❒͡ *STATUS* :「 ${public} 」
│
╰── 「 *NEKO BOTZ* 」 ──

❉──────────────────❉  
*Name* : *${pushname2}* 
*Your API* : *https://wa.me/${sender.split('@')[0]}*
*Limit* : *${Limitnya}*


*Your Progress*:
*Level: ${levelMenu}*
*XP: ${xpMenu} / ${reqXp}*
*Role: ${role}*
*Your Balance: $${uangku}*
❉──────────────────❉  

*── 「 BOT STATUS 」 ──*

 ❏ *${timebot}*

 𒍮 *Auto-Regis User: ${jumlahUser}*

 𒍮 *Total Hit Bot : ${jumlahCommand}*

 𒍮 *Total Hit Today : ${jumlahHarian}*

*── 「 ELAINA BOT 」 ──*


*Official BOT By @0*`
}

exports.menuDownloader = (prefix) => {
    return `
*── 「 DOWNLOADER 」 ──*

*!facebook*
Download Facebook video.
Aliases: *fb*
Usage: *!facebook* link_video

*!nthentaipdf*
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: *!nthentaipdf* -code-

*!tiktok*
Mendownload video TikTok.
Aliases: -
Usage: *!tiktok* link_video

*!twitter*
Download Twitter media.
Aliases: *twt*
Usage: *!twiter* link

*!tiktoknowm*
Download source dari tiktokvideo.
Aliases: -
Usage: *!tiktoknowm*

*!igdl*
Download video dari Source Instagram.
Aliases: *instagramdl*, *ig*
Usage: *!ig* link_video

*!ytmp3*
Download audio Channel user 
Aliases: *storyig*
Usage: *!ytmp3* Link Video

*!ytmp4*
Download video Channel user 
Aliases: -
Usage: *!ytmp4* Link video

*!mediafire*
Info dan direct link media
Aliases: media
Usage: *!mediafire* link

*!soundcloud*
Download soundcloud music.
Aliases: -
Usage: *!souncloud* link_music

*!tikokaudio*
search tikok audio
Aliases: -
Usage: *!linedl* link_sticker

*!play*
search YouTube audio
Aliases: -
Usage: *!play* judul lagu
`
}

exports.menuText = (prefix) => {
    return `
*── 「 TEXT MAKER 」 ──*
   
    *BLOM ADA CONTEKAN*   
`
}

exports.menuPremi = (prefix) => {
    return `
*── 「 PREMIUM 」 ──*
Halo premium users ヽ(・∀・)ﾉ!

BLOM ADA CONTEKAN
`
}

exports.menuSticker = (prefix) => {
    return `
*── 「 STICKER 」 ──*

*${prefix}dadu*
Memberikan sticker dadu
Aliases: -
Usage: *${prefix}dadu*

*${prefix}doge*
Memberikan sticker doge
Aliases: -
Usage: *${prefix}doge*

*${prefix}toimg*
Mengubah *Sticker* Menjadi *foto*
Aliases: -
Usage: *${prefix}toimg*

*${prefix}patrick*
Memberikan sticker Patrick
Aliases: -
Usage: *${prefix}patrick*

*${prefix}garwgura*
Memberikan sticker garwgura
Aliases: -
Usage: *${prefix}garwgura*

*${prefix}ttg* 
Memberikan sticker teks
Aliases: -
Usage: *${prefix}ttg* _*teks*_

*${prefix}attp*
Memberikan sticker teks
Aliases: -
Usage: *${prefix}attp* _*teks*_

*${prefix}stickeranime*
Memberikan sticker anime
Aliases: -
Usage:  *${prefix}stickeranime*

*${prefix}semoji* _*emoji*_
Memberikan sticker doge
Aliases: -
Usage: 

*${prefix}sticker* 
Mengubah foto menjadi Sticker
Aliases: -
Usage: *${prefix}sticker* _*reply foto/video*_

*${prefix}smeme* *teks|teks*_
Memberikan sticker 
Aliases: -
Usage: *${prefix}smeme* Fax

*${prefix}swm*
Memberikan sticker 
Aliases: -
Usage: *${prefix}swm* _*pack|author*_

*${prefix}take*
-----
Aliases: -
Usage: *${prefix}take* _*pack|author*_

*${prefix}tovideo* _*reply sgif*_
Mengubah sticker gif menjadi video
Aliases: -
Usage: *${prefix}tovideo*
`
}

exports.menuWeeaboo = (prefix) => {
    return `
*── 「 WEEABOO 」 ──*

*${prefix}loli*
search bot world images
Aliases: -
Usage: *${prefix}loli*

*${prefix}manga*
search bot world images
Aliases: -
Usage: *${prefix}manga*

*${prefix}anime*
search bot world images
Aliases: -
Usage:

*${prefix}lolivideo*
search bot world images
Aliases: -
Usage: 

*${prefix}husbu*
search bot world images
Aliases: -
Usage: *${prefix}husbu*

*${prefix}waifu*
search bot world images
Aliases: -
Usage: *${prefix}waifu*

*${prefix}milf*
search bot world images
Aliases: -
Usage: *${prefix}milf*

*${prefix}neko*
search bot world images
Aliases: -
Usage: *${prefix}neko*

*${prefix}kanna*
search bot world images
Aliases: -
Usage: *${prefix}kanna*

*${prefix}sagiri*
search bot world images
Aliases: -
Usage: *${prefix}sagiri*
`
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*
Halo Owner-sama ヽ(・∀・)ﾉ!

*${prefix}bc   *teks*
*${prefix}term*
*${prefix}join* link gc
*${prefix}eval*
*${prefix}reset*
*${prefix}clearall*
*${prefix}getquoted*
*${prefix}premium* add @tag|nomor
*${prefix}shutdown*
*${prefix}addupdate* fiturnya
*${prefix}leaveall*
*${prefix}sewa* _*add/del waktunya*_
*${prefix}exif* _*nama|author*_
*${prefix}premium* _del @tag|nomor_
    `
}

exports.menuFun = (prefix) => {
    return `
*── 「 FUN FEATURE 」 ──*

*${prefix}slot*
Permainan User
Aliases : -
Usage : Slot

*${prefix}limitgame*
Limit User
Aliases : -
Usage : *${prefix}limitgame*

*${prefix}gelud @tag*
gelud User
Aliases : -
Usage : *${prefix}gelud @tag user*

*${prefix}tictactoe @tag*
Game Bot Elaina
Aliases : -
Usage :  *${prefix}tictactoe @tag*

*${prefix}siapaaku*
Permainan User
Aliases : -
Usage : *${prefix}siapaaku*

*${prefix}family100*
Permainan User
Aliases : -
Usage : *${prefix}family100*

*${prefix}kuismath*
Permainan User
Aliases : -
Usage : *${prefix}kuismath*

*${prefix}asahotak*
Permainan User
Aliases : -
Usage : *${prefix}asahotak*

*${prefix}tebaklirik*
Permainan User
Aliases : -
Usage : *${prefix}tebaklirik*

*${prefix}tebaklagu*
Permainan User
Aliases : -
Usage : *${prefix}tebaklagu*

*${prefix}tebakkata*
Permainan User
Aliases : -
Usage : *${prefix}tebakkata*

*${prefix}susunkata*
Permainan User
Aliases : -
Usage : *${prefix}susunkata*

*${prefix}kimiakuis*
Permainan User
Aliases : -
Usage : *${prefix}kimiakuis*

*${prefix}caklontong*
Permainan User
Aliases : -
Usage : *${prefix}caklontong*

*${prefix}tebakjenaka*
Permainan User
Aliases : -
Usage : *${prefix}tebakjenaka*

*${prefix}tebakanime*
Permainan User
Aliases : -
Usage : *${prefix}tebakanime*

*${prefix}tebaktebakan*
Permainan User
Aliases : -
Usage : *${prefix}tebaktebakan*

/${prefix}tebakgambar*
Permainan User
Aliases : -
Usage : *${prefix}tebakgambar*

*${prefix}tebakbendera*
Permainan User
Aliases : -
Usage : *${prefix}tebakbendera*

*${prefix}suit *batu/kertas/gunting*
Permainan User
Aliases : -
Usage : *${prefix}suit *batu/kertas/gunting*
`
}

exports.menuImage = (prefix) => {
    return `
*── 「 EFFECT AND MANIPULATION 」 ──*

BLOM ADA CONTEKAN
`
}

exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*

1. *${prefix}kapankah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}kapankah* text

2. *${prefix}bisakah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}bisakah* text

3. *${prefix}rate*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}rate* pertanyaan
`
}

exports.menuModeration = (prefix) => {
    return `
*── 「 MODERATION GROUP 」 ──*
  
*!add*
Menambah user ke dalam group.
Aliases: -
Usage: *!add* 628xxxxxxxxxx

*!kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *!kick* @member1

*!promote*
Promote member menjadi admin.
Aliases: -
Usage: *!promote* @member1

*!demote*
Demote member dari admin.
Aliases: -
Usage: *!demote* @member1

*!leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *!leave*

*!tagall*
Mention semua member group.
Aliases: *everyone*
Usage: *!tagall*

*grup*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *grup* buka/tutup

*!setppgrup*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *!setppgrup* atau reply gambar dengan caption *!groupicon*.

*!antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *!antilink* enable/disable

*!welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *!welcome* enable/disable

*!setdecs*
Mengubah tampilan deskripsi.
Aliases: -
Usage: *!setdecs* Aulia Bot

*!linkgroup*
Cek link invite group.
Aliases: -
Usage: *!linkgroup*

*!listonline*
Memberikan/tag yang online di grup.
Aliases: -
Usage: *!listonline*

*!mute*
Membisukan bot di grup.
Aliases: -
Usage: *!mute* enable/disable
`
}


exports.menuNsfw = (prefix) => {
    return `
*── 「 NSFW 」 ──*

1. *${prefix}waifu18*

dah ah 1 aja blom ada contekan

`
}

exports.menuLeveling = (prefix) => {
    return `
*── 「 LEVELING 」 ──*

BLOM ADA CONTEKAN
`
}

exports.menuPrimbon = (prefix) => {
    return `
*── 「 PRIMBON MENU 」 ──*

BLOM ADA CONTEKAN
`
}

exports.menuPray = (prefix) => {
    return `
*── 「 PRAY 」 ──*

BLOM ADA CONTEKAN
`
}

exports.menuMisc = (prefix) => {
    return `
*── 「 MEDIA AND MISC 」 ──*

*${prefix}brainly *query*
*${prefix}shopee*  _*product*_
*${prefix}playstore*  _*query*_
*${prefix}ssweb*  _*query*_
*${prefix}google*  _*query*_
*${prefix}image*  _*query*_
*${prefix}pinterest*  _*query*_
*${prefix}nulis*  _*teks*_
*${prefix}iguser*  _*ussername*_
*${prefix}igstalk*  _*username*_
*${prefix}githubstalk*  _*username*_
*${prefix}tiktokstalk*  _*ussername*_
*${prefix}img2url*  _*reply foto*_
*${prefix}ytsearch*  _*query*_
`
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT STAT 」 ──*

*${prefix}update*
*${prefix}level*
*${prefix}listsewa*
*${prefix}sourcecode*
*${prefix}profile*
*${prefix}waktu*
*${prefix}botstat*
*${prefix}rules*
*${prefix}sewabot*
*${prefix}leaderboard*
*${prefix}owner*
*${prefix}ping*
*${prefix}runtime*
*${prefix}donasi*
*${prefix}listpremium*
*${prefix}cekpremium*
*${prefix}bugreport *keluhan*
`
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  ${pushname}*
*Harga Sewa Bot*
*30K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*Pulsa = ${owner}*
*Tsel 081313144291*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/${owner} (Owner)*

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 35K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*Pulsa = ${ownerNumber}*
*Tsel 081313144291*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
081313144291 (Tsel)


Terima kasih!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc
    `
}
