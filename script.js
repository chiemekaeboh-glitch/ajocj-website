const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

const searchBtn=document.getElementById('searchBtn');
const searchPanel=document.getElementById('searchPanel');
if(searchBtn) searchBtn.addEventListener('click',()=>{searchPanel.classList.toggle('show'); if(searchPanel.classList.contains('show')) document.getElementById('searchInput').focus();});

const doSearch=document.getElementById('doSearch');
if(doSearch) doSearch.addEventListener('click',()=>{
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  if(!q) return;
  const matches=[...document.querySelectorAll('article h3, .hero-copy h1')].filter(el=>el.textContent.toLowerCase().includes(q));
  alert(matches.length ? `${matches.length} matching story title(s) found on this demo homepage.` : 'No matching story found on this homepage.');
});
