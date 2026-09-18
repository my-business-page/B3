const loader=document.getElementById('loader');const toggle=document.querySelector('.menu-toggle');const nav=document.getElementById('primary-nav');const year=document.getElementById('year');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('is-hidden'),450));
if(year)year.textContent=new Date().getFullYear();
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const header=document.querySelector('.site-header');let lastY=0;window.addEventListener('scroll',()=>{const y=window.scrollY;if(y>40&&y>lastY)header?.classList.add('header-hidden');else header?.classList.remove('header-hidden');lastY=y;},{passive:true});
