
function displayTime(){
    let date = new Date();
    //console.log(date)
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm= document.getElementById("ampm");
    if(hr>12){
        hr=hr-12;
        ampm.innerHTML="PM";

    }
    else{
        ampm.innerHTML="AM";
    }
    document.getElementById("hr").innerHTML=`${hr} :`;
    document.getElementById("min").innerHTML=`${min} : `;
    document.getElementById("sec").innerHTML=`${sec} :` ;
}

setInterval(displayTime,500);

