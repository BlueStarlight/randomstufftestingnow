const Discord = require("discord.js");

exports.run = function (client, message, args) {
if (message.content.includes(" ")) {
if (message.content.includes(" 2")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("Emojis")
        .setDescription("Here are some more emojis:")
        .setColor('#202020')
        .addField("Tip:", "Use `.[the emoji name]` to have me send the emoji.")
        .addField("nostudy", "<a:nostudy:702253713301176391>", true)
        .addField("dogwave", "<a:dogwave:716561007975071764>", true)
        .addField("bear lol ⁂", "<a:bearlaugh:715432910387150869>", true)
        .addField("bear sleep", "<a:bearsleep:705110839681876080>", true)
        .addField("stitch sleep", "<a:stitchsleep:715432940926009365>", true)
        .addField("redsleep", "<a:redpandasleep:702273649054449705>", true)
        .addField("foxplay", "<a:foxplay:702270291350519859>", true)
        .addField("skribblheart ⁂", "<a:skribblheart:702237447311851638>", true)
        .addField("bunsmh", "<a:bunsmh:702499573368881202>", true)
        .addField("snap", "<a:thanos_snap:715049315579461642>", true)
        .addField("countdown ⁂", "<a:countdown:715432063892717622>", true)
        .addField("100 ⁂", "<a:100:720882331031699516>", true)
        .addField("virtualthink ⁂", "<a:virtualthink:720876133884624959>", true)
        .addField("crazyeyes ⁂", "<a:freakeyes:722123756545507418>", true)
        .addField("angryping ⁂", "<a:angryping:722123730419187723>", true)
        .addField("kthxbai", "<a:kthxbai:715413857719418942>", true)
        .addField("bud", "use `.bud [good/music/other]` to use the bud emojis")
        .addField("good", "<a:budgood:702368056705286225>", true)
        .addField("music", "<a:budmusic:702368214088417311>", true)
        .addField("bye", "<a:budbye:702368131422748734>", true)
        .addField("type", "<a:budtype:702365957481431100>", true)
        .addField("sneeze", "<a:budsneeze:702368179359580211>", true)
        .addField("More emojis", "use `.emojis 3` for more!")
        .setFooter("⁂ = works as a reaction too (e.g. .msg react [message id]; name of emoji)");

    message.channel.send(embed);
}

if (message.content.includes(" 3")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("Emojis")
        .setDescription("Here are some more emojis:")
        .setColor('#202020')
        .addField("munch", "<a:munch:725528361497264209>", true)
        .addField("idk", "<a:idk:725528336578904134>",  true)
        .addField("gotobed", "<a:gotobed:715432790786703400>", true)
        .addField("crazydance", "<a:crazydance:736205809905565749>", true)
        .addField("Menhera-chan", "use `.m [good/music/other]` to use the emojis")
        .addField("good", "<a:good:725533414039748659>", true)
        .addField("cold", "<a:cold:725533446314655745>", true)
        .addField("music", "<a:music:725533305356812319> ", true)
        .addField("eat", "<a:food:725533213115809885>", true)
        .addField("umm", "<a:nervous:725533330799591474>", true)
        .addField("chips", "<a:tiredchips:725533246732894308>", true)
        .addField("breadnom", "<a:breadnom:725539435063803914>", true)
        .addField("dingdong", "<a:dingdong:725534913096319066>", true)
        .addField("yessir", "<a:yessir:725533280387989555>", true)
        .addField("yup", "<a:yup:725534982264848526>", true)
        .addField("?", "<a:confused:725534379312414720>", true)
        .setFooter("⁂ = works as a reaction too (e.g. .msg react [message id]; name of emoji)");

    message.channel.send(embed);
}

}

else {
    let embed = new Discord.MessageEmbed()
    .setTitle("Emojis")
    .setDescription("Here are some emojis:")
    .setColor('#202020')
    .addField("Tip:", "Use `.[the emoji name]` to have me send the emoji. \n General emojis:")
    .addField("dancingdoggo", "<a:dancingdoggo:689992016884793356>", true)
    .addField("happygirl ⁂", "<a:happygirl:701245543925415957>", true)
    .addField("loading ⁂", "<a:loading:705109882856013915>", true)
    .addField("kittylove", "<a:kittylove:705109545109815296>", true)
    .addField("catmeow", "<a:meowcat:702365911062937650>", true)
    .addField("cutecat", "<a:catcute:702237144231575693>", true)
    .addField("bouncebread", "<a:bouncebread:702237395185172501>", true)
    .addField("verified ⁂", "<a:verified:702237343280660512>", true)
    .addField("meowparty", "<a:rainbowcat:702237498503331920>", true)
    .addField("pensive", "<a:pensive1:769356824758976552>", true)
    .addField("facepalm", "<a:facepalm:702500055348805652>", true)
    .addField("smile", "<a:smileart:702253625732235324>", true)
    .addField("blob", "use `.blob [cry/peek/other]` to use the blob emojis")
    .addField("blush", "<a:blobblush:702368354786082837>", true)
    .addField("flush", "<a:flush:715418893270777896>", true)
    .addField("cringe", "<a:cringe:715418858479157288>", true)
    .addField("trash", "<a:trash:715418893270908928>", true)
    .addField("popcorn", "<a:popcorn:715418858839736390>", true)
    .addField("peek", "<a:peek:715418893388218439>", true)
    .addField("woozy", "<a:woozy:715418892557746248>", true)
    .addField("snow 1", "<a:snow1:715428517273141249>", true)
    .addField("snow 2", "<a:snow2:715428489334882406>", true)
    .addField("partytrash", "<a:partytrash:715429426564694018>", true)
    .addField("More emojis", "use `.emojis 2` for more!")
    .setFooter("⁂ = works as a reaction too (e.g. .msg react [message id]; name of emoji)");

message.channel.send(embed);
}

}