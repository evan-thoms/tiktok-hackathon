(()=>{"use strict";const t=new WebSocket("ws://"+window.location.host+"/ws"),e=document.getElementById("notifications"),n=document.getElementById("content-list"),o=document.getElementById("contentForm");t.onmessage=function(t){const o=JSON.parse(t.data);e.style.display="block",e.innerHTML=`New content added: "${o.text}" at ${new Date(o.timestamp).toLocaleString()}`;const s=document.createElement("li");s.textContent=o.text,n.insertBefore(s,n.firstChild),setTimeout((()=>{e.style.display="none"}),1e4)},o.addEventListener("submit",(function(t){t.preventDefault();const e=new FormData(o);e.get("content"),fetch("/submit",{method:"POST",body:e}).then((t=>{t.ok?(console.log("Content submitted successfully"),o.reset()):console.error("Error submitting content")})).catch((t=>{console.error("Error:",t)}))}))})();