const nav=document.querySelector('.nav');
const syncNav=()=>nav?.classList.toggle('nav--scrolled',window.scrollY>8);
addEventListener('scroll',syncNav,{passive:true});syncNav();
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
