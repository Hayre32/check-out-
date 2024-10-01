const fs = require('fs');

// Load the config.json file
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

// Access Telegram bot token and database configuration
const botToken = config.telegram.bot_token;

const dbConfig = config.database;
const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});
