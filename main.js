let dateWhenPageWasLoaded = new Date();


let launchDate = dateWhenPageWasLoaded;
launchDate.setHours(dateWhenPageWasLoaded.getHours() + 50); // adds 50 hours to it (2 days + 2hours).

// I am not using a fixed launch date (like 01/01/2023 or whatever) because time passes 
// and inevitably the countdown would reach 00:00:00:00, making the page kinda useless.


let x = setInterval(
    
    function(){
        
        let now = new Date().getTime();
        let timeLeft = launchDate.getTime() - now;

        
        let days    = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours   = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


        let daysStr    = ((days    < 10) ? '0'+days    : days);
        let hoursStr   = ((hours   < 10) ? '0'+hours   : hours);
        let minutesStr = ((minutes < 10) ? '0'+minutes : minutes);
        let secondsStr = ((seconds < 10) ? '0'+seconds : seconds);
        
        
        document.getElementById("days-number").innerHTML    = daysStr;
        document.getElementById("hours-number").innerText   = hoursStr;
        document.getElementById("minutes-number").innerText = minutesStr;
        document.getElementById("seconds-number").innerText = secondsStr;
    }, 
    
100// updates every 100 miliseconds.
);
