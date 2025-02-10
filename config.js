

module.exports = {
  TOKEN: "",
  language: "ja",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://<db_username>:<db_password>@cluster0.ddpbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "愉快なゲーム", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/N28YUYpdAe",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "ChalresNaig Node",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    }
  ]
}
