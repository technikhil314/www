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
