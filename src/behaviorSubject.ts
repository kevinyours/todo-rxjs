import { BehaviorSubject, fromEvent, map, Subject, withLatestFrom } from "rxjs";

const emitButton = document.querySelector("button#emit");
const inputElement: HTMLInputElement = document.querySelector("#value-input");
const subscribeButton = document.querySelector("button#subscribe");

const value$ = new Subject<string>();

fromEvent(emitButton, "click")
  .pipe(map(() => inputElement.value))
  .subscribe(value$);

fromEvent(subscribeButton, "click").subscribe(() => {
  console.log("New Subscription");
  value$.subscribe((value) => console.log(value));
});

const loggedInSpan: HTMLInputElement = document.querySelector("span#logged-in");
const loginButton: HTMLElement = document.querySelector("button#login");
const logoutButton: HTMLElement = document.querySelector("button#logout");
const printStateButton: HTMLElement =
  document.querySelector("button#print-state");

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, "click").subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, "click").subscribe(() => isLoggedIn$.next(false));

isLoggedIn$.subscribe((isLoggedIn) => {
  loginButton.style.display = isLoggedIn ? "block" : "none";
  loginButton.style.display = !isLoggedIn ? "block" : "none";
});

fromEvent(printStateButton, "click")
  .pipe(withLatestFrom(isLoggedIn$))
  .subscribe(() => console.log("User is logged in:", isLoggedIn$.value));
