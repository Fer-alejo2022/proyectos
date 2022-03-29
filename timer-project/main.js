let hours = 2;
let minutes = 0;
let second = 0;

function chargerSeconds() {
    const s = document.getElementById("seconds");
     let txt_second;  
     if (second < 0) {
           second = 59;
      } 
      txt_second = `${second < 10 ? '0' : ""}${second}`;
      s.innerHTML = txt_second;
      second--;
      chargerMinutes(second);
}

function chargerMinutes(second) {
        const m = document.getElementById("minutes");
        let txt_minutes;
        if (second == -1 && minutes != 0) {
              setTimeout(()=>{
                   minutes--;
              },500)
        } else if (second == -1 && minutes == 0) {
               setTimeout(()=>{
                    minutes = 59;
               },500)
        }
        txt_minutes = `${minutes < 10 ? '0' : ""}${minutes}`;
        m.innerHTML = txt_minutes;
        chargerHours(second,minutes);
}

function chargerHours(second,minutes) {
          const h = document.getElementById("hours");
          let txt_hours;
          if (second == -1 && minutes == 0 && hours != 0) {
                setTimeout(()=>{
                    hours--;
                },500)
          } else if (second == -1 && minutes == 0 && hours == 0) {
                 setTimeout(()=>{
                     hours = 2;
                 },500)
          }
          txt_hours = `${hours < 10 ? '0' : ""}${hours}`;
          h.innerHTML = txt_hours;
}

const start = document.getElementById("press");

start.addEventListener('click', () => {
         setInterval(chargerSeconds,1000);
})

