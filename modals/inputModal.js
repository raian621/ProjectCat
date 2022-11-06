const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const genInputModal = ( customId, modalTitle, titleLabel, descriptionLabel ) => {
  return new ModalBuilder()
  .setCustomId(customId)
  .setTitle(modalTitle)
  .addComponents(
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('inputModalTitle')
          .setLabel(titleLabel)
          .setStyle(TextInputStyle.Short)
      ),
    new ActionRowBuilder()
        .addComponents(
          new TextInputBuilder('inputModalDate')
            .setCustomId('inputModalDate')
            .setLabel('Due Date (MM/DD/YYY):')
            .setStyle(TextInputStyle.Short)
            .setRequired(false)
        ),
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('inputModalDescription')
          .setLabel(descriptionLabel)
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
      ),
  );
}

module.exports = genInputModal;