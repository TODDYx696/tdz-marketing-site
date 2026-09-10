const WHATSAPP_NUMBER='13998016977';

const plans=[
  {d:1,p:10},
  {d:2,p:18},
  {d:3,p:25},
  {d:5,p:40},
  {d:7,p:55,r:true},
  {d:15,p:100},
  {d:30,p:180}
];

const grid=document.getElementById('plans');

plans.forEach(x=>{
  const label=x.d===1?'1 dia':`${x.d} dias`;
  const el=document.createElement('article');
  el.className='plan'+(x.r?' recommended':'');
  el.innerHTML=`
    ${x.r?'<span class="badge">MAIS ESCOLHIDO</span>':''}
    <span class="duration">${label}</span>
    <div class="price"><small>R$</small> ${x.p}</div>
    <p>Divulgação durante ${label}.</p>
    <a class="btn wa" data-msg="Olá! Vi o site da TDZ Marketing e quero contratar o plano de ${label}.">Contratar pelo WhatsApp</a>
  `;
  grid.appendChild(el);
});

function setupWhatsApp(){
  document.querySelectorAll('.wa').forEach(a=>{
    a.href='https://wa.me/55'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(a.dataset.msg||'Olá! Vi o site da TDZ Marketing e quero saber mais.');
    a.target='_blank';
    a.rel='noopener noreferrer';
  });
}

const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');

btn?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  btn.setAttribute('aria-expanded',String(open));
  btn.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
});

nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  btn?.setAttribute('aria-expanded','false');
  btn?.setAttribute('aria-label','Abrir menu');
}));

document.getElementById('year').textContent=new Date().getFullYear();
setupWhatsApp();