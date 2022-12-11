import { filter, map, of, tap } from "rxjs";

/**
 * https://jaywoz.medium.com/information-is-king-tap-how-to-console-log-in-rxjs-7fc09db0ad5a
 * https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
 */

of(1, 7, 3, 6, 2)
  .pipe(
    tap((value) => console.log("Spy Before: ", value)),
    map((value) => value * 2),
    filter((value) => value > 5),
    tap({
      next: (value) => console.log("Spy After: ", value),
    }),
  )
  .subscribe((value) => console.log("Output: ", value));
