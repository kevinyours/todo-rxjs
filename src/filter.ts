import { filter, Observable } from "rxjs";

interface NewItem {
  category: "Business" | "Sports";
  content: string;
}

const newFeed$ = new Observable<NewItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "A" });
  }, 100);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "B" });
  }, 100);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "C" });
  }, 100);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "D" });
  }, 100);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "E" });
  }, 100);
});

newFeed$
  .pipe(filter((item) => item.category === "Sports"))
  .subscribe((item) => console.log(item));
