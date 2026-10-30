const p=require('puppeteer-core');
const OUT='/Users/hamzatahri/IdeaProjects/personal/developerMe/instagram/shots/';
const BASE=process.env.BASE||'https://hamzatahri.github.io/vitrine/demos/';
(async()=>{
const b=await p.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new'});
for(const a of ['salon-jamila','snack-lmoumen','riad-nour','hammam-salam','auto-ecole-najah','meilou']){
 const pg=await b.newPage();
 await pg.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
 await pg.goto(BASE+a+'/',{waitUntil:'networkidle0'});
 await new Promise(r=>setTimeout(r,1500));
 await pg.screenshot({path:OUT+a+'.png'});
 const h=await pg.evaluate(()=>document.documentElement.scrollHeight);
 console.log(a,h);
 await pg.close();
}
await b.close();
})();
