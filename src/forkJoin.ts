import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomName$ = ajax("https://random-data-api.com/api/name/random_name");
const randomNation$ = ajax(
  "https://random-data-api.com/api/nation/random_nation",
);
const randomFood$ = ajax("https://random-data-api.com/api/food/random_food");

randomName$.subscribe((ajaxResponse: any) =>
  console.log(ajaxResponse.response.first_name),
);
randomNation$.subscribe((ajaxResponse: any) =>
  console.log(ajaxResponse.response.capital),
);
randomFood$.subscribe((ajaxResponse: any) =>
  console.log(ajaxResponse.response.dish),
);

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${[
        // @ts-ignore
        nameAjax.response.first_name,
        // @ts-ignore
        nationAjax.response.capital,
        // @ts-ignore
        foodAjax.response.dish,
      ]}`,
    ),
);
