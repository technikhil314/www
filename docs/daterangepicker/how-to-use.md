---
id: how-to-use
title: How to Use
---

### Import the `DatetimerangepickerModule`

#### Import the `DatetimerangepickerModule` module into your code

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// Add this line ↓
import { DatetimerangepickerModule } from "angular-datetimerangepicker";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Add this line ↓
    DatetimerangepickerModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

<br/>

### Use `daterangepicker` component

#### Use the `daterangepicker` component anywhere in your angular module

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

### Pass configuration to the component

#### You can pass many configutation options to the `daterangepicker` component

#### Check [Options section](/docs/daterangepicker/configuration-options) for more details

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
