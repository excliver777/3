module.exports = {
    name: '대기열청소',
    aliases: ['대기열청소'],
    category: 'Music',
    utilisation: '{prefix}대기열청소',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`  당신은 채널에 참가하지 않았습니다 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`같은 채널이 계시지않고있습니다 !`);

        if (!client.player.getQueue(message)) return message.channel.send(` 아무 노래 안틀고있음 !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(` 곡이 하나 밖에없는데영 ㅇㅅㅇ`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success}  트랙 **제거됨** !`);
    },
};