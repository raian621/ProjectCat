import { CommandInteraction, ModalSubmitInteraction, SlashCommandBuilder } from 'discord.js';
import modal from '../modals/createTaskModal'

export const data = new SlashCommandBuilder()
  .setName('create_task')
  .setDescription('creates a task for a stage in a project');

export async function execute(interaction: CommandInteraction) {
  // await interaction.channel.send(`This command was run by ProjectCat`);
  await interaction.showModal(modal);
};

export async function handleInput(interaction: ModalSubmitInteraction) {
  const response = `your task submission was received successfully!\n` +
    `**Title**: ${interaction.fields.getTextInputValue('inputModalTitle')}\n` +
    `**Due Date**: ${interaction.fields.getTextInputValue('inputModalDate')}\n` +
    `**Description**: ${interaction.fields.getTextInputValue('inputModalDescription')}`;
  
  await interaction.reply({
    ephemeral: true,
    content: response,
  });
}