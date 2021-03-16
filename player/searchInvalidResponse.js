module.exports = (client, message, query, tracks, content, collector) => {
    if (content === '취소') {
        collector.stop();
        return message.channel.send(`${client.emotes.success}  취소됨!`);
    } else message.channel.send(` 제대로된 숫자를 입력해주세요. **1** 부터 **${tracks.length}** 까지 적어주세요`);
};