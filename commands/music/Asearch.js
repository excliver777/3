module.exports = {
    name: '플레이',
    aliases: ['플레이'],
    category: 'Music',
    utilisation: '{prefix}플레이 [이름/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(` 보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(` 같은보이스채널에 있지않음 !`);

        if (!args[0]) return message.channel.send(`  재목좀 넣어주실레요??^^ 하..하... `);

        client.player.play(message, args.join(" "));
    },
};