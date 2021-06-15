alert("Attached")
setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime + stime/10;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    mint.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}, 1000);