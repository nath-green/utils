# utils

Collection of utils

- [formatUrlWithProtocol](#user-content-formaturlwithprotocol)
- [isEmptyObject](#user-content-isemptyobject)

## formatUrlWithProtocol

Returns formatted `url`

```js
import { formatUrlWithProtocol } from "@nath-green/utils";

const formattedUrl = formatUrlWithProtocol({
  url: "www.test.co.uk",
  secure: true,
});

// returns https://www.test.co.uk
```

### Parameters

An object of values

| Param  | Type    | Default | Description            |
| ------ | ------- | ------- | ---------------------- |
| url    | String  |         | URL to be formatted    |
| secure | Boolean | `false` | To prefix with `https` |

---

## isEmptyObject

Returns a `boolean`

```js
import { isEmptyObject } from "@nath-green/utils";

const models = {};

const noModels = isEmptyObject(models);

// returns true
```

```js
import { isEmptyObject } from "@nath-green/utils";

const models = { latest: "Mustang", fastest: "Polo" };

const hasModels = !isEmptyObject(models);

// returns true
```

### Parameters

A single parameter

| Param | Type   | Default | Description         |
| ----- | ------ | ------- | ------------------- |
| obj   | Object |         | Object to be tested |
