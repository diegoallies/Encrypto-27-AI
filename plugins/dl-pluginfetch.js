
const config = require('../config');
const fs = require('fs');
const axios = require('axios');
const { cmd } = require('../command');

cmd({
  pattern: "fetch",
  react: "🗂️",
  desc: "Download a specific file from the GitHub repository",
  category: "system",
  use: '.fetch <filename>',
  filename: __filename
}, async (conn, mek, m, { from, reply, match }) => {
  try {
    const filename = match[1];
    if (!filename) {
      return reply("Please provide a filename");
    }

    const repoUrl = 'https://github.com/mrfrank-ofc/SUBZERO-MD/main/plugins/';
    const fileUrl = repoUrl + filename;

    const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'utf-8');

    await conn.sendMessage(from, { document: { url: fileUrl }, mimetype: 'application/octet-stream', filename }, { quoted: mek });
  } catch (error) {
    console.error(error);
    reply(`Error fetching file: ${error.message}`);
  }
});
