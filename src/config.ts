import dotenv from 'dotenv';
dotenv.config();

const { CLIENT_ID, GUILD_ID, BOT_TOKEN, DEBUG } = process.env;

if (!CLIENT_ID || !GUILD_ID || !BOT_TOKEN || !DEBUG) {
  throw new Error("Missing environment variables.")
}

const config: Record<string, string> = {
  CLIENT_ID,
  GUILD_ID,
  BOT_TOKEN,
  DEBUG
}

export default config;