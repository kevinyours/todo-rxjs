import { Observable, Subscriber } from "rxjs";

// const someObservable$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// someObservable$.subscribe(value => console.log(value));

const observable$ = new Observable<string>((subscriber) => {
  console.log("Observable executed");
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

const observer = {
  next: (value: any) => console.log(value),
};

console.log("Subscription 1 starts");
observable$.subscribe((value) => console.log("sub1: ", value));

setTimeout(() => {
  console.log("Subscription 2 starts");
  observable$.subscribe((value) => console.log("sub2: ", value));
}, 1000);
