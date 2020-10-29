---
id: events
title: User Events
---

Subscribe to rangeSelected event as

```html
<date-range-picker
  [class]="'col-md-12 form-control'"
  [options]="date and time range pickerOptions"
  (rangeSelected)="rangeSelected($event)"
></date-range-picker>
```

the event listener will receive a javascript object conaining

```js
{
  start: "dayjs object representing start date selected by user";
  end: "dayjs object representing end date selected by user";
}
```

and if you have set singleCalendar to true then the event listener will receive following

```js
{
  start: "dayjs object representing date selected by user";
}
```
