const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "환영";
const welcomeChannelComment = "환영합니다!!";

client.on('ready', () => {
  console.log('봇 ON!!');
  client.user.setPresence({ game: { name: '에메랄드 도움말을 쳐보세요.' }, status: 'online' })
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '에메랄드 안녕') {
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#01DFA5')
    .setDescription(`<@${message.author.id}> 님 안녕하세요!`+ ' 혹시 하실 말씀 있으신가요?')
    message.channel.send(exampleEmbed)
  }

  if(message.content == '에메랄드 어그로') {
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#97e5ef')
    .setDescription(`미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..`)
    message.channel.send(exampleEmbed)
  }

  if(message.content == '에메랄드 사랑해') {
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#01DFA5')
    .setDescription(`<@${message.author.id}> 님! 저도요!`+ ' 절 좋아해주셔서 감사합니다!')
    message.channel.send(exampleEmbed)
  }

  if(message.content == '에메랄드 정보') {
    let img = 'https://gamepedia.cursecdn.com/minecraft_ko_gamepedia/6/6a/Emerald.png?version=37ba648ee37d87a1deefc3ae8adac3a7';
    let embed = new Discord.RichEmbed()
      .setTitle('에메랄드봇에 대한 정보')
      .setAuthor('Made by ω주환ω')
      .setColor('#97e5ef')
      .setThumbnail(img)
      .addBlankField()
      .addField('탄생일', '2020년 7월 31일')
      .addField('주인', 'ω주환ω')
      .addField('좋아하는 것', '다이아몬드와 놀기')
      .addField('좋아하는 게임', '마인크래프트')
      .addBlankField()
      .setTimestamp()
      .setFooter('ω주환ω가 만듬', img)
  
      message.channel.send(embed)
    }
    
  if(message.content == '에메랄드 명령어 리스트') {
    let img = 'https://gamepedia.cursecdn.com/minecraft_ko_gamepedia/6/6a/Emerald.png?version=37ba648ee37d87a1deefc3ae8adac3a7';
    let embed = new Discord.RichEmbed()
      .setTitle('명령어 리스트')
      .setAuthor('Made by ω주환ω')
      .setColor('#97e5ef')
      .setThumbnail(img)
      .addBlankField()
      .addField('에메랄드 명령어', '에메랄드 도움말')
      .addField('프레드봇 명령어', ';;commands music')
      .addField('그루비 명령어', '-help')
      .addField('아야나 명령어', '=music')
      .addField('알티봇 명령어', '알티야 도움')
      .addField('이프 명령어', '이프야 도움말')
      .addField('전적이 명령어', '!도움말')
      .addField('포켓몬봇 명령어', ';help')
      .addBlankField()
      .setTimestamp()
      .setFooter('ω주환ω가 만듬', img)

    message.channel.send(embed)
  } else if(message.content == '에메랄드 도움말') {
    let helpImg = 'https://gamepedia.cursecdn.com/minecraft_ko_gamepedia/6/6a/Emerald.png?version=37ba648ee37d87a1deefc3ae8adac3a7';
    let commandList = [
      {name: '에메랄드 안녕', desc: '에메랄드가 인사를 해요!'},
      {name: '에메랄드 명령어 리스트', desc: '다른 봇들의 명령어 보여주기'},
      {name: '에메랄드 전체공지', desc: 'dm으로 전체 공지 보내기(관리자 권한 필요!)'},
      {name: '에메랄드 정보', desc: '에메랄드에 대한 정보!'},
      {name: '에메랄드 사랑해', desc: '에메랄드에 사랑을 표현해요!'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('에메랄드봇의 도움말', helpImg)
      .setColor('#97e5ef')
      .setFooter(`에메랄드봇`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('에메랄드 전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('에메랄드 전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('전송 완료!!');
    } else {
      return message.reply('여기선 사용할 수 없어요!!');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "관리자 권한이 없어 사용할 수 없어요!!")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);