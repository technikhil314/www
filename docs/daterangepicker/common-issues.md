---
id: common-issues
title: Common issues / FAQs
---

### Common issues developers face either using this package or dayjs

[dayjs](https://day.js.org/) has good support for typescript, but is not mature in my opinion and it also breaks based on what version of typescript compiler one is using.

Some common faced problems are and their solutions are

#### Q. I am facing this issue `error TS2304: Cannot find name 'unknown'.`

Add `"skipLibCheck": true,` in your tsconfig.json under `compilerOptions`

#### Q. I am facing issues with importing dayjs plugin

Make sure you are importing and adding plugins to dayjs as follows

```ts
import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParser from "dayjs/plugin/customParseFormat";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(customParser);
```
