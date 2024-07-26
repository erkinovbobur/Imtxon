
const info= document.querySelector(".info");

const element = JSON.parse(localStorage.getItem("element")) || null;

info.innerHTML = ""

if(element){
info.innerHTML = `
<div class="info-title">
<h2>${element.title}</h2>
<p>${element.tags}</p>
</div>
<div class="info__image">
<img src="${element.image}" alt="">
</div>
<div class="info__content">
<p class="info-description">${element.description}</p>
</div>`
}