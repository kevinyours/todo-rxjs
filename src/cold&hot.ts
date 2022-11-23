import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

// code observable
const ajax$ = ajax<any>("https://random-data-api.com/api/name/random_name");

ajax$.subscribe((data) => console.log("Sub1: ", data.response.first_name));
ajax$.subscribe((data) => console.log("Sub2: ", data.response.first_name));
ajax$.subscribe((data) => console.log("Sub3: ", data.response.first_name));

// hot observable
const helloButton = document.querySelector("button#hello");
const helloClick$ = new Observable((subscriber) => {
  helloButton.addEventListener("click", (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event: any) =>
  console.log("Click 1:", event.type, event.x, event.y),
);

setTimeout(() => {
  console.log("Subscription 2 starts");
  helloClick$.subscribe((event: any) =>
    console.log("Click 2:", event.type, event.x, event.y),
  );
}, 5000);
