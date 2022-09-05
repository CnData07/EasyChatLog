//LiteLoaderScript Dev Helper
/// <reference path="G:/Minecraft/LXL/JS_Edit/HelperLib-master/src/index.d.ts"/> 

const _VER = '1.0.2';
//简单记录一下玩家聊天内容
const dir_path = './plugins/EasyChatLog/';

mc.listen("onChat",(pl,msg)=>{
    var msglog = `${system.getTimeStr()}\t${pl.realName}\t${msg}`;
    var tm = system.getTimeObj();

    path =`${dir_path}/${tm.Y}.${tm.M}/${tm.Y}.${tm.M}.${tm.D}.txt`;

    File.writeLine(path, msglog);
})

colorLog("yellow", "加载完成!");