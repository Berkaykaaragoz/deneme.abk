const { StrictMode } = require("react");

let sonuc;
sonuc = document.getElementsById("title");
sonuc.textContent = "Yapilacaklar Listesi";
sonuc.style.color = "blue";
sonuc.style.backgroundColor = "lightgray";
sonuc.style.text.Align = "center";
sonuc.style.fontsize = "36px";

sonuc = document.getElementById("liste1");
console.log(sonuc);
sonuc = document.getElementById("madde2");
sonuc.style.color = "red";
console.log(sonuc);

sonuc = document.querySelector("h2");
sonuc = document.querySelector("u1");
sonuc = document.querySelector("madde2");
sonuc = document.querySelector("madde3");
console.log(sonuc);

sonuc=document.querySelectorAll("li");
sonuc = document.querySelectorAll("p");
console.log(sonuc);

