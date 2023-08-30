
function getUserDate() {
    let userDate = prompt("Enter the date in this format (aug 31, 2023 08:14:40) to start your Countdown Timer:");
    let future = Date.parse(userDate);
    return future;
}
let futureTime = getUserDate();

function updateTimer(){
let present = new Date();
const diff= (futureTime - present)/1000;
const inputs = document.querySelectorAll("input")

//Method-1
//1day=24hrs , 1hr=60min , 1min=60sec
const days= Math.floor(diff/(24*60*60));
//here diff/(60*60) gives total hours left but we need to remove the day(which is in hrs) count, so to remove we use %24 which give (remainder) remaning hrs excluded day count. 
const hours= Math.floor(diff/(60*60)%24);
//similarly we are dividing value with 60 so its give mins left 
const min=Math.floor(diff/60%60);
const sec=Math.floor(diff%60);

//Method-2
/*const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60));
const mins = Math.floor(diff / (1000 * 60));
const secs = Math.floor(diff / 1000);
const d = days;
const h = hours - days * 24;
const m = mins - hours * 60;
const s = secs - mins * 60;*/

// console.log(diff);
// console.log(days);
// console.log(hours);
// console.log(min);
// console.log(sec);

// if (diff < 0) return; 

inputs[0].value = days;
inputs[1].value = hours;
inputs[2].value = min;
inputs[3].value = sec;
}
updateTimer();
setInterval(updateTimer, 1000);

