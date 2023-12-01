import Clock from "./clock.js";

let clockList = [];
let list = document.getElementById("clock-list");
for (let index = 0; index < 5; index++) {
    let clock = new Clock(0, index, list, ("id-"+index));
    clockList.push(clock);
}

// Stop all clocks
let stopAll = document.createElement("button");
stopAll.innerText = "Stop All";
stopAll.addEventListener("click", ()=>{
    clockList.map((a) => {
        console.log(a)
        a.stop();
    })
});

document.querySelector("body").appendChild(stopAll);