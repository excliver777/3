module.exports = {
    name: '접속상태',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}접속상태',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} 는 **${client.voice.connections.size}** 개의 채널에 접속 되어있습니다 !`);
    },
};