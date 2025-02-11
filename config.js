

module.exports = {
  TOKEN: "",
  language: "ja",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://admin:admin@cluster0.l1ualfd.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "野獣先輩", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/N28YUYpdAe",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    },
    {
      name: "ChalresNaig Node",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    }
  ]
}
