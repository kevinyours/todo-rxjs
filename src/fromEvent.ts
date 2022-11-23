import { fromEvent, Observable } from "rxjs";

const triggetButton = document.querySelector("button#trigger");

// fromEvent<MouseEvent>(triggetButton, "click").subscribe((event) =>
//   console.log(event.type, event.x, event.y),
// );

const triggetClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandlerFn = (event: MouseEvent) => {
    console.log("Event Callback executed");
    subscriber.next(event);
  };

  triggetButton.addEventListener("click", clickHandlerFn);

  return () => {
    triggetButton.removeEventListener("click", clickHandlerFn);
  };
});

// triggetClick$.subscribe((event) => console.log(event.type, event.x, event.y));

// const subscription = fromEvent<MouseEvent>(triggetButton, "click").subscribe(
//     (event) => console.log(event.type, event.x, event.y),
//   );

const subscription = triggetClick$.subscribe((event) =>
  console.log(event.type, event.x, event.y),
);

setTimeout(() => {
  console.log("unsubscribe");
  subscription.unsubscribe();
}, 5000);
