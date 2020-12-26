import { fromEvent } from "rxjs";

const startButton = document.getElementById("start");

fromEvent(startButton, "click").subscribe((e) => console.log(e));
