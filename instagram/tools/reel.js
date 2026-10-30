const p=require('puppeteer-core');const fs=require('fs');const cp=require('child_process');
const D='/Users/hamzatahri/IdeaProjects/personal/developerMe/instagram/';
const FF='/Users/hamzatahri/Library/Python/3.9/lib/python/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1';
(async()=>{
const slug=process.argv[2],fps=30,dur=12;
const b=await p.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--disable-web-security']});
const pg=await b.newPage();
await pg.setViewport({width:1080,height:1920});
await pg.goto('http://localhost:8765/ig/reel.html#'+slug,{waitUntil:'networkidle0'});
await pg.reload({waitUntil:'networkidle0'});
await pg.waitForFunction('document.body.dataset.ready',{timeout:20000});
await pg.evaluate('document.fonts.ready');
const fd='/tmp/frames-'+slug;fs.rmSync(fd,{recursive:true,force:true});fs.mkdirSync(fd);
const n=fps*dur;
for(let i=0;i<n;i++){
 await pg.evaluate(t=>window.setT(t),i/fps);
 await new Promise(r=>setTimeout(r,45));
 await pg.screenshot({path:fd+'/'+String(i).padStart(4,'0')+'.jpg',type:'jpeg',quality:92});
}
await b.close();
fs.mkdirSync(D+'out/reels',{recursive:true});
cp.execFileSync(FF,['-y','-framerate',String(fps),'-i',fd+'/%04d.jpg','-c:v','libx264','-pix_fmt','yuv420p','-crf','18','-movflags','+faststart',D+'out/reels/'+slug+'.mp4'],{stdio:'ignore'});
fs.rmSync(fd,{recursive:true,force:true});
console.log('done',slug);
})();
