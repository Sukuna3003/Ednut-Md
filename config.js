//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kushimotunde7@gmail.com";
global.location = "Lagos,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://pisax49409:sukuna@cluster0.eg71a4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Sukuna3003/Ednut-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZAY2P4yltOvNaegY2w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZAY2P4yltOvNaegY2w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b44c6239710466c2e81d1.jpg";
global.devs = "2348102487241";
global.sudo = process.env.SUDO || "2347068425825";
global.owner = process.env.OWNER_NUMBER || "2347014128473";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b44c6239710466c2e81d1.jpg";
global.waPresence = process.env.WAPRESENCE || "online";//online,recording,composing,available,unavailable
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://ednut-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "EDNUT-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExvd0laWDdhY0lyK3NkVytXLzhFK2d6ZDlXaWJ4QWRxMVpHRmJKNi8zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM09MRFdaZVdUVjFja0EvVFRhMzE2dzVTeVdmQ1l5UjRXMjltSytHcjExST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ0VVS2hyT3RLS2VEYkxmRVhIVzZNeENwd0xrbENRU1lpRS9FbVNqOFZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTWllQ2NiUmdmVzhzdXJrU1BoMWtCcGVpUzVaTlpRUFliWWNNcjZweHlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPODhneEZPV3ZoWjNKcCtIYXo2MXRvb1duSzdWM3U5RGdKdFFqSkZvbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRudDJybnpuVGhZNVM5UklTbkFGbkpGdjRNU3ZWbmozankzNklmMjVMbUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpDeDhQVlJ0YWdHai93SHdBbXltVys2UXYvSUVMb3dGdmduVDJDeWYxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTUwUk5IRnRLUDl3SCtJVldVNHE5WUhGZEZrSGRaUmZEbWtwcFFSd3NUVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF5TUNCcWdMOWMrcktUUVpSckR4M0VVcUJzY2lrNlJCcGc3eVMrRGZ0MzEyN2M4M2NRNlJKaGVtRG80b1ZJSHBOYzd2djZJZ05HOGxZMGdpOEJVaURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiY3hYMnc4a243YzE2ZDRvM1VuRk92aGwvbGlGdnNTUUczWmp1VSswRUNTND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQzRGZGRlaWNTTDY0MEVrUEl0U05FUSIsInBob25lSWQiOiJlYTVhYTAxMS00NjZlLTRiNTYtYWRkZS03NWU2NWFkNmJkMzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmhhZUF6d0VyZlZ5eEhtY3hlc2o3RldmcmxBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1kbkNzRS9kaDcwdFBmeFJaa2d3YUl2ajIxdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxM1lXTEs4VCIsIm1lIjp7ImlkIjoiMjM0NzAxNDEyODQ3MzoxNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG5BMVlNRkVKVHdoTFFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGJrTDZqUklFcTZiSllBZ29JalRuVFBwRTE3VWtSZEhWeTZBNnEzSjAxST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZkd0NlpJNjFneXVVKzRxUFR4dDFQeFBrQVlkQmdjUk9IVjBSNnZoQVlCemFzUkkwZnRVWU9PVWMyaHprV2N5SWxweUdmaXpkU002cXZtVUE1MGZrRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9uSVdQNUMyZVgyb2dSVFB3czFXOVl2cDc5UDhsSzl5N3hjbEt6VkRsQklwNWd2bzBnWmtSQml3VXlxTllGenIwVC9kbVd3bklkYVpPZ25uL3dhQUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAxNDEyODQ3MzoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjVzVDK28wU0JLdW15V0FJS0NJMDUwejZSTmUxSkVYUjFjdWdPcXR5ZE5TIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzQ0NTQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg5YiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || 'null',
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || ""ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨,
  author: process.env.PACK_AUTHER || "💀",
  packname: process.env.PACK_NAME || "𝑺𝑼𝑲𝑼𝑵𝑨",
  botname: process.env.BOT_NAME || "𝛫𝛪𝛮𝐺 𝑆𝑈𝛫𝑈𝛮𝛥 𝑅𝑌𝛩𝛭𝛯𝛮",
  ownername: process.env.OWNER_NAME || "𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨✞ᵍʳᵉʸ✞",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Ednut-Md").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
