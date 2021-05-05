
function clock(){
    const fullDate = new Date();

    var hour = fullDate.getHours();
    if(hour<10)
    hour = '0' + hour;
    var min = fullDate.getMinutes();
    if(min<10)
    min = '0' + min;
    var sec = fullDate.getSeconds();
    if(sec<10)
    sec = '0' + sec;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = ':' + min;
    document.getElementById("second").innerHTML = ':' + sec;
}

setInterval(clock,100);

// console.log(document.getElementById("minute"));
