const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348058725864";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_44_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1VHVmM3EvV3NCSVhsbUJENnlSSWg5VDRMclQ2d3cvSmtqTFkxNmhrMk1RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUM212NnVDLVRlNlZwY0ZIMGJERkRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNjZDAwNDI1LWY0NzQtNDBjZS1iOTI5LWM0YjI2NGQ3MGE1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDQ3LFxuICAgICAgMTY1LFxuICAgICAgMTE1LFxuICAgICAgMTYxLFxuICAgICAgMTE5LFxuICAgICAgNDUsXG4gICAgICAxOTcsXG4gICAgICAxMDQsXG4gICAgICAxMjUsXG4gICAgICA2NCxcbiAgICAgIDExNSxcbiAgICAgIDk5LFxuICAgICAgMTQzLFxuICAgICAgOTUsXG4gICAgICAxODIsXG4gICAgICA2OSxcbiAgICAgIDE5MSxcbiAgICAgIDI0MCxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDIzNixcbiAgICAgIDI0OSxcbiAgICAgIDE1OSxcbiAgICAgIDYsXG4gICAgICAxMjIsXG4gICAgICAxNDksXG4gICAgICAzNyxcbiAgICAgIDIwNCxcbiAgICAgIDYxLFxuICAgICAgMTE5LFxuICAgICAgOTgsXG4gICAgICA3NSxcbiAgICAgIDE2LFxuICAgICAgODksXG4gICAgICAyMDIsXG4gICAgICAxMDAsXG4gICAgICAyOCxcbiAgICAgIDIzOSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2NDhRWjM2S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1ODcyNTg2NDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkh5c21hcnRcIixcbiAgICBcImxpZFwiOiBcIjY2OTYzMDAyOTEyODg2OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05UTzhhMEdFTXFseWJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOVJrTGZtL0o4SHZDVXpmWXpkdG84UmhYQTFZUzNVQWNkQjdLbTdLWU9EMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVZks5N1lOSFhhMDY1bTFGUTNldXFSMk1Rc0xaT080bHJISWt1UFplUTdKUHJjbjZHc1pNcjIvN3czckpPeVExZG9ZVndUNGcvOW13TjdkT2FZa1VCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJNDBpbmE5d1lqU1VlZnlCbDlFTzAxSzI2OXI4K2l3MThxWVpWcVlxQ0sxZmxoTjI5WkkybWZDR0E4MlQxNW9udVRjdExPM2dpY1FSaVZOeHBmUFFBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDU4NzI1ODY0OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTYyNjM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzVjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3UHEvbTMxK24yNmxwMHRQSWtZdXR1bng1U2JjcGovMnpRMWRCcnJkQis0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDY4NDYwMzYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzIyOTYyNTI3NzY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
