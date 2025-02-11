const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { autoplayCollection } = require('../mongodb.js');
const musicIcons = require('../UI/icons/musicicons.js');
const config = require('../config.js');

async function toggleAutoplay(client, interaction, lang) {
    try {
        const enable = interaction.options.getBoolean('enable');
        const guildId = interaction.guild.id;

        await autoplayCollection.updateOne(
            { guildId },
            { $set: { autoplay: enable } },
            { upsert: true }
        );

        const embed = new EmbedBuilder()
            .setColor(enable ? '#00ff00' : '#ff0000')
            .setAuthor({ 
                name: lang.autoplay.embed.autoplayUpdated, 
                iconURL: musicIcons.correctIcon,
                url: config.SupportServer 
            })
            .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon })
            .setTimestamp()
            .setDescription(lang.autoplay.embed.autoplayStatus.replace("{status}", enable ? lang.autoplay.embed.enabled : lang.autoplay.embed.disabled));

        await interaction.reply({ embeds: [embed] });
    } catch (error) {
        console.error('自動再生の切り替え中にエラーが発生しました:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setAuthor({ 
                name: lang.autoplay.embed.error, 
                iconURL: musicIcons.alertIcon,
                url: config.SupportServer 
            })
            .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon })
            .setTimestamp()
            .setDescription(lang.autoplay.embed.errorDescription);

        await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
}

module.exports = {
    name: 'y-autoplay',
    description: 'サーバーの自動再生を切り替えます',
    permissions: '0x0000000000000800',
    options: [
        {
            name: 'enable',
            description: '自動再生をオン/オフに切り替えます',
            type: ApplicationCommandOptionType.Boolean,
            required: true
        }
    ],
    run: toggleAutoplay
};
