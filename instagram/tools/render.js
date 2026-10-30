const p=require('puppeteer-core');
const D='/Users/hamzatahri/IdeaProjects/personal/developerMe/instagram/';
(async()=>{
const b=await p.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files']});
const pg=await b.newPage();
await pg.setViewport({width:1080,height:1350});
await pg.goto('file://'+D+'posts.html#welcome',{waitUntil:'networkidle0'});
const ids=await pg.evaluate(()=>window.IDS);
const only=process.argv[2];
for(const id of ids){
 if(only&&!id.startsWith(only))continue;
 await pg.goto('file://'+D+'posts.html#'+id);
 await pg.reload({waitUntil:'networkidle0'});
 await pg.waitForFunction('document.body.dataset.ready');
 await new Promise(r=>setTimeout(r,400));
 const {w,h}=await pg.evaluate(()=>({w:+document.body.dataset.w,h:+document.body.dataset.h}));
 await pg.setViewport({width:w,height:h});
 const dir=id.startsWith('hl-')||id==='avatar'?'profile':'posts';
 require('fs').mkdirSync(D+'out/'+dir,{recursive:true});
 await pg.screenshot({path:D+'out/'+dir+'/'+id+'.png',clip:{x:0,y:0,width:w,height:h}});
 console.log(id);
}
await b.close();
})();
