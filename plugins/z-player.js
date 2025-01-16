/*  SSSSS  U   U  BBBBB   ZZZZZ  EEEEE  RRRRR   OOO      M   M   DDDD  
 S       U   U  B    B     Z   E      R   R  O   O     MM MM   D   D 
  SSS    U   U  BBBBB     Z    EEEE   RRRRR  O   O     M M M   D   D 
     S   U   U  B    B   Z     E      R  R   O   O     M   M   D   D 
  SSSSS   UUU   BBBBB  ZZZZZ  EEEEE  R   R   OOO      M   M   DDDD  
*/

// Wanna Use My Codes???
// Give Credits Yah, Mr Frank



/*const { cmd, commands } = require('../command');
const yts = require("yt-search");
const axios = require("axios");

// Video Download Command
cmd({
  pattern: "videopro",
  alias: ["ytvidpro", "ytvpro", 'ytvideopro'],
  react: '',
  desc: "Download videos from YouTube by searching for keywords.",
  category: "video",
  use: ".vidx <keywords>",
  filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply("*Please provide a video title or URL*");
    }

    await reply("> © SubZero Searching Video... Please Wait...");
    
    const results = await yts(query);
    if (!results.videos || results.videos.length === 0) {
      return reply("❌ No results found for \"" + query + "\".");
    }

    const video = results.videos[0];
    const url = video.url;
    const apiURL = "https://api.davidcyriltech.my.id/youtube/mp4?url=" + url;

    await reply("> © SubZero Downloading Video... Please Wait...");

    const response = await axios.get(apiURL);
    if (!response.data.success) {
      return reply("❌ Failed to fetch video for \"" + query + "\".");
    }

    const downloadURL = response.data.result.download_url;
    await reply("> © SubZero Sending Video... Please Wait...");
    
    await conn.sendMessage(from, { video: { url: downloadURL }, mimetype: "video/mp4" }, { quoted: msg });
    
    await reply("✅ Video sent successfully!");
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});

// Audio Download Command
cmd({
  pattern: "playpro",
  alias: ["ytapro", "ytplaypro"],
  react: '',
  desc: "Download audio from YouTube by searching for keywords.",
  category: "music",
  use: ".playpro <keywords>",
  filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply("*Please provide an audio title or URL*");
    }

    await reply("> © SubZero Searching Song... Please Wait...");
    
    const results = await yts(query);
    if (!results.videos || results.videos.length === 0) {
      return reply("❌ No results found for \"" + query + "\".");
    }

    const video = results.videos[0];
    const url = video.url;
    const apiURL = "https://api.davidcyriltech.my.id/youtube/mp3?url=" + url;

    await reply("> © SubZero Downloading Song... Please Wait...");

    const response = await axios.get(apiURL);
    if (!response.data.success) {
      return reply("❌ Failed to fetch audio for \"" + query + "\".");
    }

    const downloadURL = response.data.result.download_url;
    await reply("> © SubZero Sending Song... Please Wait...");
    
    await conn.sendMessage(from, { audio: { url: downloadURL }, mimetype: 'audio/mp4', ptt: false }, { quoted: msg });
    
    await reply("✅ Song sent successfully!");
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});


// Audio Download Command
cmd({
  pattern: "playpro",
  alias: ["ytapro", "ytplaypro"],
  react: '✅',
  desc: "Download audio from YouTube by searching for keywords.",
  category: "music",
  use: ".playpro <keywords>",
  filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply("*Please provide an audio title or URL*");
    }

    reply("> © SubZero Generating Song... Please Wait...");

    const results = await yts(query);
    if (!results.videos || results.videos.length === 0) {
      return reply("❌ No results found for \"" + query + "\".");
    }

    const video = results.videos[0];
    const url = video.url;
    const apiURL = "https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=" + url;

    const response = await axios.get(apiURL);

*/
 const { cmd, commands } = require('../command');
const yts = require("yt-search");
const axios = require("axios");

// Video Download Command here
cmd({
  pattern: "videopro",
  alias: ["ytvidpro", "ytvpro", 'ytvideopro'],
  react: '🚀',
  desc: "Download videos from YouTube by searching for keywords.",
  category: "video",
  use: ".vidx <keywords>",
  filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply("*Please provide a video title or URL*");
    }

    await reply("> SubZero Searching Video... Please Wait...");
    
    const results = await yts(query);
    if (!results.videos || results.videos.length === 0) {
      return reply(" No results found for \"" + query + "\".");
    }

    const video = results.videos[0];
    const url = video.url;
    const apiURL = "https://api.davidcyriltech.my.id/youtube/mp4?url=" + url;

    await reply("> SubZero Downloading Video... Please Wait...");

    const response = await axios.get(apiURL);
    if (!response.data.success) {
      return reply(" Failed to fetch video for \"" + query + "\".");
    }

    const downloadURL = response.data.result.download_url;
    await reply("> SubZero Sending Video... Please Wait...");
    
    await conn.sendMessage(from, { video: { url: downloadURL }, mimetype: "video/mp4" }, { quoted: msg });
    
    await reply(" Video sent successfully!");
  } catch (error) {
    console.error(error);
    reply(" An error occurred while processing your request.");
  }
});


// Audio Download Command here
cmd({
pattern: "playpro",
alias: ["ytapro", "ytplaypro"],
react: '🦄',
desc: "Download audio from YouTube by searching for keywords.",
category: "music",
use: ".playpro <keywords>",
filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
try {
const query = args.join(" ");
if (!query) {
return reply("_Please provide an audio title or URL_");
}

await reply("> SubZero Searching Song... Please Wait...");

const results = await yts(query);
if (!results.videos || results.videos.length === 0) {
  return reply(" No results found for \"" + query + "\".");
}

const video = results.videos[0];
const url = video.url;
const apiURL = "https://api.davidcyriltech.my.id/youtube/mp3?url=" + url;

await reply("> SubZero Downloading Song... Please Wait...");

const response = await axios.get(apiURL);
if (!response.data.success) {
  return reply(" Failed to fetch audio for \"" + query + "\".");
}

const downloadURL = response.data.result.download_url;
await reply("> SubZero Sending Song... Please Wait...");

await conn.sendMessage(from, { audio: { url: downloadURL }, mimetype: 'audio/mp4', ptt: false }, { quoted: msg });

await reply(" Song sent successfully!");

} catch (error) {
console.error(error);
reply(" An error occurred while processing your request.");
}
});

/*const {
  cmd,
  commands
} = require('../command');
const yts = require("yt-search");
const axios = require("axios");
cmd({
  'pattern': "videopro",
  'alias': ["ytvidpro", "ytvpro", 'ytvideopro'],
  'react': '✅',
  'desc': "Download videos from YouTube by searching for keywords.",
  'category': "video",
  'use': ".vidx <keywords>",
  'filename': __filename
}, async (_0x443755, _0x543ba8, _0xb49b84, {
  from: _0x33c56a,
  args: _0x145006,
  reply: _0x2710af
}) => {
  try {
    const _0x180808 = _0x145006.join(" ");
    if (!_0x180808) {
      return _0x2710af("*Please provide a video tital or url*");
    }
    _0x2710af("> © SᴜʙZᴇʀᴏ Gᴇɴᴇʀᴀᴛɪɴɢ Vɪᴅᴇᴏ Pʟᴇᴀsᴇ Wᴀɪᴛ...");
    const _0x1c3fd5 = await yts(_0x180808);
    if (!_0x1c3fd5.videos || _0x1c3fd5.videos.length === 0x0) {
      return _0x2710af("❌ No results found for \"" + _0x180808 + "\".");
    }
    const _0x3e0ad8 = _0x1c3fd5.videos[0x0];
    const _0x898f76 = _0x3e0ad8.url;
    const _0x4200bd = "https://api.davidcyriltech.my.id/youtube/mp4?url=" + _0x898f76;
    const _0x487ed3 = await axios.get(_0x4200bd);
    if (!_0x487ed3.data.success) {
      return _0x2710af("❌ Failed to fetch video for \"" + _0x180808 + "\".");
    }
    const {
      download_url: _0xd424ba
    } = _0x487ed3.data.result;
    await _0x443755.sendMessage(_0x33c56a, {
      'video': {
        'url': _0xd424ba
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x543ba8
    });
  } catch (_0x4921e0) {
    console.error(_0x4921e0);
    _0x2710af("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "playpro",
  'alias': ["ytapro", "ytplaypro"],
  'react': '✅',
  'desc': "Download audio from YouTube by searching for keywords.",
  'category': "music",
  'use': ".playpro <keywords>",
  'filename': __filename
}, async (_0x222018, _0x5bc6a4, _0x2b481b, {
  from: _0x35d246,
  args: _0x3a1931,
  reply: _0x31fd3f
}) => {
  try {
    const _0x2b4b83 = _0x3a1931.join(" ");
    if (!_0x2b4b83) {
      return _0x31fd3f("*Please provide a audio tital or url*");
    }
    _0x31fd3f("> © SᴜʙZᴇʀᴏ Gᴇɴᴇʀᴀᴛɪɴɢ Sᴏɴɢ Pʟᴇᴀs Wᴀɪᴛ...");
    const _0x116e0a = await yts(_0x2b4b83);
    if (!_0x116e0a.videos || _0x116e0a.videos.length === 0x0) {
      return _0x31fd3f("❌ No results found for \"" + _0x2b4b83 + "\".");
    }
    const _0x50d4d8 = _0x116e0a.videos[0x0];
    const _0x228b87 = _0x50d4d8.url;
    const _0xd4aee7 = "https://api.davidcyriltech.my.id/youtube/mp3?url=" + _0x228b87;
    const _0x4c55a0 = await axios.get(_0xd4aee7);
    if (!_0x4c55a0.data.success) {
      return _0x31fd3f("❌ Failed to fetch audio for \"" + _0x2b4b83 + "\".");
    }
    const {
      download_url: _0x95f653
    } = _0x4c55a0.data.result;
    await _0x222018.sendMessage(_0x35d246, {
      'audio': {
        'url': _0x95f653
      },
      'mimetype': 'audio/mp4',
      'ptt': false
    }, {
      'quoted': _0x5bc6a4
    });
  } catch (_0x40de03) {
    console.error(_0x40de03);
    _0x31fd3f("❌ An error occurred while processing your request.");
  }
});
*/
