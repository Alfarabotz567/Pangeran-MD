let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
━━━〔 ıll *Sewa Bot* llı 〕━━㉿
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━㉿
⬡ *1 BULAN* 15.000
⬡ *2 bulan 2 grup:* 20.000
⬡ *1 tahun 3 grup:* 25.000
⟩» lebih dari 3 tambah +5.000
📮 *Kalau sudah transfer segera bilang ke owner!*
┗━━━━━━━━━━━━━━━━━━㉿
┏━━━〔 ıll *PAYMENT* llı 〕━━㉿
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
⬡ *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *Dana yang sudah masuk tida bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━㉿
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewazifa']
handler.tags = ['info']
handler.command = /^(zifasewa|sewazifa)$/i

module.exports = handler
