"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var moment = require('moment');
var AppComponent = (function () {
    function AppComponent() {
        this.daterangepickerOptions = {
            startDate: null,
            endDate: null,
            format: "DD.MM.YYYY",
            minDate: "01.01.2017",
            maxDate: "17.05.2017",
            inactiveBeforeStart: true,
            autoApply: false,
            showRanges: true,
            preDefinedRanges: [{
                    name: 'Day After tomorrow',
                    value: {
                        start: moment().add(2, 'days'),
                        end: moment().add(2, 'days'),
                    }
                }],
            singleCalendar: true
        };
    }
    AppComponent.prototype.rangeSelected = function (data) {
        debugger;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-datepicker-demo",
            template: "\n\t\t<div class=\"col-md-2\">\n\t\t\t<date-range-picker [class]=\"'col-md-12 form-control'\" [options]=\"daterangepickerOptions\" (rangeSelected)=\"rangeSelected($event)\">\n\t\t\t</date-range-picker>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
