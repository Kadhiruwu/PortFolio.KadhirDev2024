let indices={carousel1:0,carousel2:0,carousel3:0};function showSlide(e,n){const t=document.getElementById(e),o=t.querySelectorAll(".carousel-inner img").length;indices[e]=n>=o?0:n<0?o-1:n;const c=100*-indices[e];t.querySelector(".carousel-inner").style.transform=`translateX(${c}%)`}function nextSlide(e){const n="carousel"+e;showSlide(n,indices[n]+1)}function prevSlide(e){const n="carousel"+e;showSlide(n,indices[n]-1)}showSlide("carousel1",0),showSlide("carousel2",0),showSlide("carousel3",0);const enlaces=document.querySelector(".enlaces"),menu=document.querySelector("#menu");menu.addEventListener("click",(function(){enlaces.classList.toggle("mostrar")})),document.getElementById("info2").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("informacion").scrollIntoView({behavior:"smooth"})})),document.getElementById("info").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("experiencia").scrollIntoView({behavior:"smooth"})}));