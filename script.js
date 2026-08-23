document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const counters=document.querySelectorAll('[data-target]');
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting||e.target.dataset.done)return;e.target.dataset.done='1';const target=Number(e.target.dataset.target);let n=0;const step=Math.max(1,Math.ceil(target/45));const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}e.target.textContent=n.toLocaleString()+'+'},25)})},{threshold:.5});
counters.forEach(c=>observer.observe(c));
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();alert('Thank you for contacting AMMA Social Welfare Organisation. The form can be connected to email or WhatsApp later.');});

const lightbox=document.getElementById('lightbox'), lightboxImg=document.getElementById('lightboxImg'), lightboxTitle=document.getElementById('lightboxTitle'), lightboxDesc=document.getElementById('lightboxDesc');
document.querySelectorAll('.gallery .photo').forEach(photo=>photo.addEventListener('click',e=>{e.preventDefault();lightboxImg.src=photo.getAttribute('href');lightboxImg.alt=photo.querySelector('img').alt;lightboxTitle.textContent=photo.dataset.title;lightboxDesc.textContent=photo.dataset.desc;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src=''}
document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
