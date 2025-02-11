const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const musicIcons = require('../UI/icons/musicicons.js');

async function remove(client, interaction, lang) {
    try {
        const position = interaction.options.getInteger('position');
        const player = client.riffy.players.get(interaction.guildId);

        if (!player || !player.queue || player.queue.length === 0) {
            const emptyQueueEmbed = new EmbedBuilder()
                .setColor(config.embedColor)
                .setAuthor({
                    name: lang.remove.embed.queueEmpty,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.remove.embed.queueEmptyDescription)
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [emptyQueueEmbed], ephemeral: true });
            return;
        }

        if (position < 1 || position > player.queue.length) {
            const invalidPositionEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setAuthor({
                    name: lang.remove.embed.invalidPosition,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.remove.embed.invalidPositionDescription.replace("{queueLength}", player.queue.length))
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [invalidPositionEmbed], ephemeral: true });
            return;
        }

        const removedTrack = player.queue.splice(position - 1, 1)[0];

        const embed = new EmbedBuilder()
            .setColor(config.embedColor)
            .setAuthor({
                name: lang.remove.embed.songRemoved,
                iconURL: musicIcons.correctIcon,
                url: config.SupportServer
            })
            .setDescription(lang.remove.embed.songRemovedDescription.replace("{songTitle}", removedTrack.info.title))
            .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

        await interaction.reply({ embeds: [embed] });
    } catch (error) {
        console.error('removeコマンドの処理中にエラーが発生しました:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setAuthor({
                name: lang.remove.embed.error,
                iconURL: musicIcons.alertIcon,
                url: config.SupportServer
            })
            .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon })
            .setDescription(lang.remove.embed.errorDescription);

        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
}

module.exports = {
    name: "y-remove",
    description: "キューから指定された位置の曲を削除します",
    permissions: "0x0000000000000800",
    options: [
        {
            name: 'position',
            description: 'キューから削除する曲の位置',
            type: ApplicationCommandOptionType.Integer,
            required: true
        }
    ],
    run: remove
};
