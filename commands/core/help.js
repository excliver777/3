module.exports = {
    name: '음악도움',
    aliases: ['음악도움'],
    category: 'Core',
    utilisation: '{prefix}도움 <명령어>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: '도움말' },
                    footer: { text: '감사합니다.' },
                    fields: [
                        { name: '봇', value: infos },
                        { name: '음악', value: music },
                        { name: '-------------------추가정보------------------', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `"!" 을 붙여 명령해보세요`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: '도움말' },
                    footer: { text: '감사합니다.' },
                    fields: [
                        { name: '이름', value: command.name, inline: true },
                        { name: '분류', value: command.category, inline: true },
                        { name: '명령어', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: '권한', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'None',
                }
            });
        };
    },
};