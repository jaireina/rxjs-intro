import { fromEvent, interval } from "rxjs";
import { switchMapTo } from "rxjs/operators";

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const outputEl = document.getElementById("output");

// 1. OUTPUT THE INTERVAL AFTER CLICKING ON A BUTTON
// createa an observable from an event
const start$ = fromEvent(startButton, "click");
// Create an observable from an interval
const interval$ = interval(1000);
// Start the interval after the event is triggered using switchMapTo
const startInterval$ = start$.pipe(switchMapTo(interval$));

// Output to the console on each interval
const subscription = startInterval$.subscribe(output);






function output(str) {
  outputEl.innerHTML = str.toString();
}
