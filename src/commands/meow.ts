import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('meow')
  .setDescription('gets ProjectCat to meow in the chat');

export async function execute(interaction: CommandInteraction) {
  await interaction.reply({content: "Meow... You've been procrastinating haven't you?", ephemeral: false})
};