var time = JSON.parse(localStorage.getItem("time"));
var money = JSON.parse(localStorage.getItem("money"));

var starFlag = true;

window.onload = function() {
    dataSet();
}

$(document).ready(function(){
  buttonEvt();
});

function save(){
    localStorage.setItem("time", JSON.stringify(time));
    localStorage.setItem("money", JSON.stringify(money));
}

function dataSet(){
    min = Math.floor(time/60);
    hour = Math.floor(min/60);
    day = Math.floor(hour/24);

    sec = time%60;
    min = min%60;
    hour = hour%24;

    var td = day;
    var th = hour;
    var tm = min;
    var ts = sec;

    if(th<10){
    th = "0" + hour;
    }
    if(tm < 10){
    tm = "0" + min;
    }
    if(ts < 10){
    ts = "0" + sec;
    }

    document.getElementById("time").innerHTML = td + ":" + th + ":" + tm + ":" + ts;
    document.getElementById("money").innerHTML = Math.floor(money) + "원";
}

function buttonEvt(){
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;

  // start btn
  $("#startbtn").click(function(){

    if(starFlag){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      starFlag = false;

      timer = setInterval(function(){
        time++;
        money += 5 / 18

        dataSet();
      }, 1000);
    }
    else{
        clearInterval(timer);
        starFlag = true;
        save();
    }
  });

  // pause btn
  $("#pausebtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;
    }
  });
}