import { CommandInteraction, ModalSubmitInteraction, SlashCommandBuilder } from 'discord.js';
import modal from '../modals/createStageModal';

export const data = new SlashCommandBuilder()
  .setName('create_stage')
  .setDescription('creates a stage for a project in database');

export async function execute(interaction: CommandInteraction) {
  await interaction.showModal(modal);
}

export async function handleInput(interaction: ModalSubmitInteraction) {
  const response = `your stage submission was received successfully!\n` +
    `**Title**: ${interaction.fields.getTextInputValue('inputModalTitle')}\n` +
    `**Due Date**: ${interaction.fields.getTextInputValue('inputModalDate')}\n` +
    `**Description**: ${interaction.fields.getTextInputValue('inputModalDescription')}`;
  
  await interaction.reply({
    ephemeral: true,
    content: response,
  });
}