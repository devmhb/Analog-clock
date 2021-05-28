setInterval(()=>{ 
d=new Date();
htime=d.getHours();

mtime=d.getMinutes();

stime=d.getSeconds();


hrotation=30*htime+mtime/2;

mrotation=6*mtime+stime/10;
srotation=6*stime;


var hour=document.querySelector(".hour")
var min=document.querySelector(".min")
var sec=document.querySelector(".sec")

hour.style.transform=`rotate(${hrotation}deg)`
min.style.transform=`rotate(${mrotation}deg)`
sec.style.transform=`rotate(${srotation}deg)`

 }, 1000);