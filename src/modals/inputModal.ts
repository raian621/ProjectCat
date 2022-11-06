import { ActionRowBuilder, ModalActionRowComponentBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';

const genInputModal = ( customId: string, modalTitle: string, titleLabel: string, descriptionLabel: string ) => {
  return new ModalBuilder()
  .setCustomId(customId)
  .setTitle(modalTitle)
  .addComponents(
    new ActionRowBuilder<ModalActionRowComponentBuilder>()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('inputModalTitle')
          .setLabel(titleLabel)
          .setStyle(TextInputStyle.Short)
      ),
    new ActionRowBuilder<ModalActionRowComponentBuilder>()
        .addComponents(
          new TextInputBuilder()
            .setCustomId('inputModalDate')
            .setLabel('Due Date (MM/DD/YYY):')
            .setStyle(TextInputStyle.Short)
            .setRequired(false)
        ),
    new ActionRowBuilder<ModalActionRowComponentBuilder>()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('inputModalDescription')
          .setLabel(descriptionLabel)
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
      ),
  );
}

export default genInputModal;