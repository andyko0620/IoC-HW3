function displaytime(){
    var today = new Date();

    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date+' '+time;

    document.getElementById("time").innerHTML = dateTime;

}

setInterval(displaytime, 1000);