const mineflayer = require("mineflayer");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Create bot
const bot = mineflayer.createBot({
  host: "mcbuddysmp.falixsrv.me", // Replace with your Minecraft server IP
  username: "ServerAdmin",
  port: 37092,
  version: false
  // Replace with your bot username
});

bot.on("spawn", () => {
  console.log("Bot spawned!");
});

bot.on("chat", (username, message) => {
  if (username === bot.username) return;
  console.log(`${username}: ${message}`);
  if (message === "hi") {
    bot.chat("Hello!");
  }
});

app.get("/", (req, res) => {
  res.send("Mineflayer bot is running!");
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
