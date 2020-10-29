---

id: how-to-use
title: How to Use

---

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DatetimerangepickerModule } from "angular-datetimerangepicker"; <--- Add this line
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DatetimerangepickerModule, <---Add this line
    FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

<br/>

## Styling

Styling is fully optional. You can override as per your choice

### Styling the input

The input box automatically takes class of the daterangepicker tag

### Using Unpkg

If you are already using bootstrap.css then just include the following css in your code
This has minimal set of rules that inherits styles from bootstrap.css <br/>
[https://unpkg.com/angular-datetimerangepicker/styles/with-bootstrap.css](https://unpkg.com/angular-datetimerangepicker/styles/with-bootstrap.css)

if you do not want to include whole bootstrap.css then include following css in your code. <br/>
[https://unpkg.com/angular-datetimerangepicker/styles/without-bootstrap.css](https://unpkg.com/angular-datetimerangepicker/styles/without-bootstrap.css)

### from node_modules

add following path to `angular.json`'s style section if you are already using bootstrap <br/>
`./node_modules/angular-datetimerangepicker/styles/with-bootstrap.css`

or add following path to `angular.json`'s style section if you dont want bootstrap <br/>
`./node_modules/angular-datetimerangepicker/styles/without-bootstrap.css`

<br/>

## How to configure

The input box automatically takes class of the daterangepicker tag

```ts
import { Component } from "@angular/core";

@Component({
  selector: "my-datepicker-demo",
  template: `
    <daterangepicker
      [class]="'col-md-12 col-lg-12 form-control'"
      [options]="daterangepickerOptions"
      (rangeSelected)="rangeSelected($event)"
    >
    </daterangepicker>
  `,
})
export class AppComponent {
  daterangepickerOptions = {
    startDate: "09/01/2017",
    endDate: "09/02/2017",
    format: "DD/MM/YYYY",
  };
}
```
