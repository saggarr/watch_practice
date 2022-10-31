function time(){
    var myDate = new Date();

    // ternaty operators...ampm er bikolpo. eigula if else diyeo kora jeto
    var hr = (myDate.getHours() < 10) ? "0" + myDate.getHours() : myDate.getHours(),
        min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
        sec = (myDate.getSeconds() < 10) ? "0" + myDate.getUTCSeconds() : myDate.getSeconds();
        ampm = myDate.getHours();

    //am pm...eita ternary operator diyeo kora jeto
    if(myDate.getHours() <= 12){
        ampm = "am";
    }
    else{
        ampm = "pm";
    }

    //24 to 12 hr format
    if(myDate.getHours() == 0){
        hr = 12;
    }
    else if(myDate.getHours() > 12){
        hr = myDate.getHours() - 12;
    }
    else{
        hr = myDate.getHours();
    }

    var currentHour = hr + " :", //bare bare var declear na kore seshe ; er bodole , diye ekdom seshe ; use kora jay. ete code kom likhte hoy
        currentMinute = min + " :",
        currentSecond = sec;

    var currentDay = myDate.getDate(),
        currentMonth = myDate.getMonth() + 1, //month 0 er theke suru kore tai 1+ disi
        currentYear = myDate.getFullYear();

    document.getElementsByClassName("hourSpan")[0].innerHTML = currentHour;
    document.getElementsByClassName("minuteSpan")[0].innerHTML = currentMinute;
    document.getElementsByClassName("secondSpan")[0].innerHTML = currentSecond;
    document.getElementsByClassName("ampmSpan")[0].innerHTML = ampm;
    document.getElementsByClassName("dateSpan")[0].innerHTML = currentDay + " / " + currentMonth + " / " + currentYear;

}

time();
setInterval(function(){
    time();
},1000)