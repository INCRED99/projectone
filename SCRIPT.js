let z=document.getElementById("id1");
let a3=document.getElementById("id3");
let a2=document.getElementById("id2");
z.addEventListener("mouseenter",function(){
z.style.backgroundColor="red";});
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor="white"});
    z.addEventListener("mouseenter",function(){
    z.innerHTML=Math.floor(Math.random()*100)});
    
let a4=document.getElementById("id4");
a4.addEventListener("mouseenter",function(){
let r1=Math.floor(Math.random()*256);
let r2=Math.floor(Math.random()*256);
let r3=Math.floor(Math.random()*256);
z.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
a3.style.backgroundColor=`rgb(${r2},${r1},${r3})`;
a2.style.backgroundColor=`rgb(${r3},${r1},${r2})`;
})
