import { catchError, EMPTY, Observable, of, pipe } from "rxjs";

const fallingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error("Timeout"));
  }, 3000);
});

console.log("App started");

fallingHttpRequest$
  .pipe(catchError((error) => EMPTY))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Completed"),
  });
