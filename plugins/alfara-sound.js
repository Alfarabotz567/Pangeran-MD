let fs = require('fs')
let handler = async (m) => {
let helloalfara = fs.readFileSync('./media/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus')
conn.sendFile(m.chat, helloalfara, '', '', m, true)
}

handler.customPrefix = /^(aine)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler