

module.exports = {
  TOKEN: "",
  language: "ja",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "野獣先輩", 
  activityType: "PLAYING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/N28YUYpdAe",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "LavalinkServer1",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 443,
      secure: true
    },
    {
      name: "LavalinkServer2",
      password: "https://dsc.gg/ajidevserver",
      host: "lavalinkv4.serenetia.com",
      port: 443,
    }
  ]
}
