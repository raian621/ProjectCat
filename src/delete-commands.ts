import config from "./config";
import { REST, Routes } from 'discord.js'

const { CLIENT_ID, GUILD_ID, BOT_TOKEN } = config;

const rest = new REST({version: '10'}).setToken(BOT_TOKEN);

rest.get(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID))
  .then(data => {
    const commands = data as Array<{ id: string }>;
    const promises = [];
    for (const command of commands) {
      const deleteUrl = `${Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID)}/${command.id}` as `/${string}`;
      promises.push(rest.delete(deleteUrl));
    }

    return Promise.all(promises);
  });

  rest.get(Routes.applicationCommands(CLIENT_ID))
  .then(data => {
    const commands = data as Array<{ id: string }>;
    const promises = [];
    for (const command of commands) {
      const deleteUrl = `${Routes.applicationCommands(CLIENT_ID)}/${command.id}` as `/${string}`;
      promises.push(rest.delete(deleteUrl));
    }

    return Promise.all(promises);
  });