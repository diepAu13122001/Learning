export default class Clock {
  constructor(min, sec, listComponent, id) {
    this.min = min;
    this.sec = sec;
    this.listComponent = listComponent;
    this.id = id;
    this.isStarted = false;

    this.getCodeHTML();
    this.printTime();
  }

  updateTimeBySec() {
    this.sec++;
    if (this.sec == 60) {
      this.sec = 0;
      this.min++;
    }
  }

  start() {
    if (!this.isStarted) {
      this.timer = setInterval(() => {
        this.updateTimeBySec();
        this.printTime();
      }, 1000);
      this.isStarted = true;
    }
  }

  stop() {
    if (this.isStarted) {
      clearInterval(this.timer);
      this.isStarted = false;
    }
  }

  printTime() {
    let minute = "";
    let second = "";
    if (this.min < 10) minute = "0" + this.min;
    else minute = this.min;
    if (this.sec < 10) second = "0" + this.sec;
    else second = this.sec;
    let subElement = this.listComponent
      .querySelector("#" + this.id)
      .querySelector("span");
    subElement.innerText = minute + ":" + second;
  }

  getCodeHTML() {
    let startBtn = document.createElement("button");
    startBtn.innerText = "Start";
    startBtn.addEventListener("click", this.start.bind(this));

    let stopBtn = document.createElement("button");
    stopBtn.innerText = "Stop";
    stopBtn.addEventListener("click", this.stop.bind(this));

    let text = document.createElement("span");

    let item = document.createElement("li");
    item.id = this.id;

    item.appendChild(text);
    item.appendChild(startBtn);
    item.appendChild(stopBtn);

    this.listComponent.appendChild(item);
  }
}
