//need end date, current date 

const newYear = "01 Jan 2024";
let inputDays = document.querySelector('#days');
let inputHours = document.querySelector('#hours');
let inputMins = document.querySelector('#mins');
let inputSeconds = document.querySelector('#seconds');

function CountDown(){
    const newYrDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecconds = (newYrDate-currentDate) / 1000;

    const days = Math.floor( totalSecconds/3600/24);
    const hours = Math.floor( totalSecconds/3600) %24;
    const mins = Math.floor( totalSecconds/60) %60;
    const seconds = Math.floor(totalSecconds) %60;
    
    inputDays.innerHTML =days;
    inputHours.innerHTML = FormatTime(hours);
    inputMins.innerHTML =FormatTime(mins);
    inputSeconds.innerHTML =FormatTime(seconds);
    

}
function FormatTime(time){
    return time <10 ? `0${time}` : time;
}

CountDown();
setInterval(CountDown,1000);