import { Observable, timer } from "rxjs";

console.log("App started");

const timer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed!"),
});

const subscription = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed!"),
});

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
