const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_14_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibXNJMTUzRkNydGhvS0tPVDJnZkxSN25oaXQ3ZTMxdGtJaXpIMHByQkpaRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnZVdEdqR2lRWm1sT092cmxCeHBQQVwiLFxuICBcInBob25lSWRcIjogXCIyMGY3NWEwZS1mZmVjLTQ3YmUtYTAxZS0zN2VmYjcyODAyYjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMTE0LFxuICAgICAgMjQ1LFxuICAgICAgMjQxLFxuICAgICAgMTUsXG4gICAgICAyMyxcbiAgICAgIDE2MyxcbiAgICAgIDU0LFxuICAgICAgMTg3LFxuICAgICAgMjU0LFxuICAgICAgMTA5LFxuICAgICAgMTg0LFxuICAgICAgMTg4LFxuICAgICAgMjQ5LFxuICAgICAgMTc1LFxuICAgICAgMjQ0LFxuICAgICAgMCxcbiAgICAgIDExOSxcbiAgICAgIDIxMSxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyMzgsXG4gICAgICAxMjcsXG4gICAgICAxNzEsXG4gICAgICA5MCxcbiAgICAgIDUxLFxuICAgICAgMjE0LFxuICAgICAgMTQ4LFxuICAgICAgMTgxLFxuICAgICAgNCxcbiAgICAgIDE3NCxcbiAgICAgIDIwMSxcbiAgICAgIDE3MixcbiAgICAgIDAsXG4gICAgICAxNDMsXG4gICAgICAyMyxcbiAgICAgIDE1OCxcbiAgICAgIDgxLFxuICAgICAgMTIsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmZmh2SUtFUEdJaXJzR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXBqVW5pSVZ1OFJFcUVOZlV0ZTlLZTI4SXRjV0JoZEozSVpNRmtSZ2FuMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxVG1pRXNEbEFILzU4Tklma3VWZy83N0M5Q01HRktFTmVMTkZGajFVQlBSc09SYlJ4WEJ2SEZyTHBoWFF6ZFE2dkRXdHFHL05YTzZmQ1JCNnE1blZnZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZRzBEcEZFQVBGT3l4WWpiNzBXWmp0N3VXOXhPOGNicUxtSXltVmlYdlM1OHFnOExWMlJiSzYyUUx4UmRIVTVGbHgrV0pQd2dCK0Rlb2oyQW9uRXhEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5ODk0NzQ0OTo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2MzcyMjc2MTMzOTY4OjU5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njk4OTQ3NDQ5OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTA5Njg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0N0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPQzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhZkFMZERMZjFRcVdHQjJ4d2N4VVdxaHp1WlB2WktEeDVDVEVjVzRvWXMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MjM1NDAzNzUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlsyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUwOTY3MTc5NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9DcS5qc29uIjogIntcImtleURhdGFcIjpcIlc4Uk9ZdmxMeG1HZ0g3ck9WT0hvQUwyOVBHM294N0lTQlVmYkZ3bFFzUXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkyMzU0MDM3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4NzQ1ODg4NzU2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0NyLmpzb24iOiAie1wia2V5RGF0YVwiOlwicE1XbTJlR20yZzVlWUs3N2xRSWJUcGdNOHQ3bloyMEkxbW11c3luZm9TWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTIzNTQwMzc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzNDQ2NTIxNzlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPQ3QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5UlU2aTZlK0d2ZTdIZDVyWXdDVkF0UzZ4YWlqNFVBSUpYN21obVZpWFYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MjM1NDAzNzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDIsMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMDU5MDI1MTY3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0N1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVJPNW5nMHJwLzRod2haNU5zWGgvM0kxQU42UnJwRDVYL20xTDZOa3h5cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTIzNTQwMzc1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIwNTkwMjY5OTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPQ3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlS3liUDUrY3o2cTYvZGxDaEpHNHJ0dG1WY1NGcHo0U0had3RzMmwycVo4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MjM1NDAzNzUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlszLDIsMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ1MDk2NjA4OThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPQ3guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWTTVFNEoyQWFOSW1OZS9LM29nd20yeG5NR0JJa1o4cWpNQ3A0c3ZXN25rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MjM1NDAzNzUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOls0LDAsMl19LFwidGltZXN0YW1wXCI6XCIxNzM0NTA5NjYyNzE4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0N6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHZOUEVDYXVaVEZTUnpiSHJNZEJyZjRDRUtPYStYcXQ4bHlYcGtnemJkYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTIzNTQwMzc1LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbNCwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUwOTY3MDA4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
