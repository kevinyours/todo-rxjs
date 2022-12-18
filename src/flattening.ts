import { concatMap, fromEvent, map, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const source$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("A"), 2000);
  setTimeout(() => subscriber.next("B"), 2000);
});

console.log("App has started");
source$
  .pipe(concatMap((value) => of(1, 2)))
  .subscribe((value) => console.log(value));

const endpointInput: HTMLInputElement =
  document.querySelector("input#endpoint");
const fetchButton = document.querySelector("button#fetch");

fromEvent(fetchButton, "click")
  .pipe(
    map(() => endpointInput.value),
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random/_${value}`),
    ),
  )
  .subscribe((value) => console.log(value));
