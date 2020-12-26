import { fromEvent, interval } from "rxjs";

const startButton = document.getElementById("start");

fromEvent(startButton, "click").subscribe((e) => console.log(e));

interval(1000).subscribe((x) => console.log("interval", x));
