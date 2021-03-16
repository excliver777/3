module.exports = {
    name: '스킵',
    aliases: ['스킵', 'ㄱㄱ', '건너뛰기'],
    category: 'Music',
    utilisation: '{prefix}스킵',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(` 보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`  같은보이스채널에 있지않음 !`);

        if (!client.player.getQueue(message)) return message.channel.send(` 아무 음악 없음 !`);

        client.player.skip(message);

        message.channel.send(`음악 **건너뜀** !`);
    },
};