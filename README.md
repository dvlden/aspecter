# Aspecter
A utility module for Node & Browser that calculates aspect ratio and decimal fraction based on width and height and alongside provides normalized aspect.

The `normalizedAspect` result contains information for intended aspect ratio of that resolution.
Many film/video creators do rendering at some weird resolutions, so normalized aspect will be the intended choice.

<br>

### Installation _(pick one)_
- `npm i aspecter`
- `yarn add aspecter`

<br>

### Usage

You may hard-code width/height or grab it from some source. _(e.g. video, image)_
If you have some weird resolution, `normalizedAspect` should be what you're actually looking for.

<br>

> TypeScript

```ts
import { aspecter } from 'aspecter'

const aspecterResult = aspecter(1280, 536)
```

<br>

> Node

```js
const { aspecter } = require('aspecter')

const aspecterResult = aspecter(1280, 536)
```

<br>

> Browser

```html
<!-- PENDING CDN SUBMISSIONS -->
<script src="path/to/aspecter.js"></script>
<script>
  const aspecterResult = aspecter(1280, 536)
</script>
```

<br>

### Output

Same resolution was used in all examples above, so the result will be the same.

```js
// -- console.log output --
{
  resolution: [1280, 536],
  originalAspect: {
    ratio: [160, 67],
    decimal: 2.38
  },
  normalizedAspect: {
    ratio: [21, 9],
    decimal: 2.33
  }
}
```
