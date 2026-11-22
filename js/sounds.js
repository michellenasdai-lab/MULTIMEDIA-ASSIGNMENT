let cur=null;
const SOUNDS=[
  {ext:"wav",mime:"audio/wav",kind:"Lossless",file:"sounds/sample.wav"},
  {ext:"mp3",mime:"audio/mpeg",kind:"Lossy",file:"sounds/sample.mp3"},
  {ext:"ogg",mime:"audio/ogg",kind:"Lossy",file:"sounds/sample.ogg"},
  {ext:"opus",mime:"audio/ogg",kind:"Lossy",file:"sounds/sample.opus"},
  {ext:"flac",mime:"audio/flac",kind:"Lossless",file:"sounds/sample.flac"},
  {ext:"aac",mime:"audio/aac",kind:"Lossy",file:"sounds/sample.aac"},
  {ext:"m4a",mime:"audio/mp4",kind:"Lossy",file:"sounds/sample.m4a"},
  {ext:"mp4",mime:"audio/mp4",kind:"Lossy",file:"sounds/sample.mp4"},
  {ext:"webm",mime:"audio/webm",kind:"Lossy",file:"sounds/sample.webm"},
  {ext:"weba",mime:"audio/webm",kind:"Lossy",file:"sounds/sample.weba"}
];

const pads=document.getElementById('pads');
SOUNDS.forEach(s=>{const a=new Audio(s.file);a.preload="auto";
const b=document.createElement('button');b.className='pad';b.setAttribute('aria-pressed','false');
b.innerHTML='<span class="eq"><i></i><i></i><i></i><i></i></span><span><b>.'+s.ext+'</b><br><small>'+s.kind+'</small></span>';
if(!a.canPlayType(s.mime.split(';')[0])&&s.ext!='opus'){b.classList.add('unsup');b.title='Not supported in this browser'}
const off=()=>b.setAttribute('aria-pressed','false');a.onended=off;a.onpause=off;
b.onclick=()=>{if(cur&&cur!==a){cur.pause();cur.currentTime=0}
if(!a.paused){a.pause();a.currentTime=0;cur=null;return}
a.currentTime=0;a.play().then(()=>{b.setAttribute('aria-pressed','true');cur=a}).catch(()=>{b.classList.add('unsup');b.title='Could not play in this browser'})};
pads.appendChild(b)});
