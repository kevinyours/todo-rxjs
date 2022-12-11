import { forkJoin, map } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomName$ = ajax(
  "https://random-data-api.com/api/name/random_name",
  // @ts-ignore
).pipe(map((ajaxResponse) => ajaxResponse.response.first_name));

const randomNation$ = ajax(
  "https://random-data-api.com/api/nation/random_nation",
  // @ts-ignore
).pipe(map((ajaxResponse) => ajaxResponse.response.capital));

const randomFood$ = ajax(
  "https://random-data-api.com/api/food/random_food",
  // @ts-ignore
).pipe(map((ajaxResponse) => ajaxResponse.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([firstName, capital, dish]) =>
    console.log(`${firstName} is from ${capital} and likes to eat ${dish}`),
);

// randomName$.subscribe((value: any) => console.log(value));
// randomNation$.subscribe((value: any) => console.log(value));
// randomFood$.subscribe((value: any) => console.log(value));
