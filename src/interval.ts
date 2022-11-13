import { Observable } from "rxjs";

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log("Emitted:", counter);
    subscriber.next(counter++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log("Upsubscribe");
  subscription.unsubscribe();
}, 7000);
