const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6288225413262',
  atasnama : 'DhsNs Team×Md'
}

// Other
global.owner = ['6288225413262',"6287764274780"]
global.premium = ['6288225413262']
global.profilebio = ['6287764274780'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = 'Di Larang Pmo:('
global.packname = 'DhsNs One Bots'
global.footer = '© 2022 DhsNs Team'
global.author = 'Owner : Dhamar Banhhh : @fdhlgrphy\nIg2 : @nr.fdhl__'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
