/*function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
   var ampm = "AM";
   if(h == 0){
         h = 12;
        }
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var time = h + ':' + m + ':' + s + ' ' + ampm;
    document.getElementById("ClockDisplay").innerText = time;

    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();
? - condition checking
*/

setInterval(() => {
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; 
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
var time = document.querySelector('.time');
var dateTime = document.querySelector('.date-time');

function upClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    var period = hours < 12 ? 'PM' : 'AM';
    time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
    dateTime.innerHTML = days[day] + ', ' + months[month] + ' ' + date + ', ' + year;
}

upClock();
setInterval(upClock, 1000);