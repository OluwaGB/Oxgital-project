btn = document.getElementById("btn");
show=()=>{console.log("login")}
btn.addEventListener('click',show)
/*= function show(){
    alert("welcome");
}
links = document.getElementsByClassName('links');
for(let i=0;i<links.length;i++){
    links[0].style.href = url('www.google.com');
}*/
Dbtn =document.getElementById("dbtn");
link1 = document.getElementById("links");
link2 = document.getElementById('link2');
display=()=>{
    link1.style.display="block";
    link2.style.display="none";
}
Dbtn.addEventListener('click',menu); 
    