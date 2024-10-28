let btn=document.querySelector("#dark");
let body=document.querySelector("body");


btn.addEventListener("click",function(){
btn.classList.toggle('bi-moon-fill');
if(btn.classList.toggle('bi-brightness-high-fill')){
body.style.backgroundColor="white";
body.style.color="black";
body.style.transition="2s";
}
else{
body.style.backgroundColor="black";
body.style.color="white";
body.style.transition="2s";
}
})