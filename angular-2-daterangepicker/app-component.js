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
            minDate: moment().add(-2, 'months').format("DD.MM.YYYY"),
            maxDate: moment().add(2, 'months').format("DD.MM.YYYY"),
            inactiveBeforeStart: true,
            autoApply: true,
            showRanges: true,
            preDefinedRanges: [{
                    name: 'Day After tomorrow',
                    value: {
                        start: moment().add(2, 'days'),
                        end: moment().add(2, 'days'),
                    }
                }, {
                    name: 'Today',
                    value: {
                        start: moment(),
                        end: moment(),
                    }
                }, {
                    name: 'Tomorrow',
                    value: {
                        start: moment().add(1, 'days'),
                        end: moment().add(1, 'days'),
                    }
                }, {
                    name: 'This week',
                    value: {
                        start: moment(),
                        end: moment().add(7, 'days'),
                    }
                }],
            singleCalendar: true,
            displayFormat: 'DD.MMM.YYYY',
            position: 'left',
            disabled: false,
            noDefaultRangeSelected: true
        };
    }
    AppComponent.prototype.rangeSelected = function (data) {
        debugger;
    };
    AppComponent.prototype.singleCalendar = function (event) {
        this.daterangepickerOptions.singleCalendar = event.target.checked;
    };
    AppComponent.prototype.autoApply = function (event) {
        this.daterangepickerOptions.autoApply = event.target.checked;
    };
    AppComponent.prototype.inactiveBeforeStart = function (event) {
        this.daterangepickerOptions.inactiveBeforeStart = event.target.checked;
    };
    AppComponent.prototype.showRanges = function (event) {
        this.daterangepickerOptions.showRanges = event.target.checked;
    };
    AppComponent.prototype.setPosition = function () {
    };
    AppComponent.prototype.prettyPrintJSON = function (object) {
        return JSON.stringify(object, null, '  ');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-datepicker-demo",
            template: "\n\t\t<div class=\"col-md-7 separator-right\">\n\t\t\t<h3>Configuration Options Tester</h3>\n\t\t\t<form>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"singleCalendar\" [(ngModel)]=daterangepickerOptions.singleCalendar id=\"singleCalendar\">\n\t\t\t\t\t<label class=\"label\" for=\"singleCalendar\">Single Calendar</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"autoApply\" [(ngModel)]=daterangepickerOptions.autoApply id=\"autoApply\">\n\t\t\t\t\t<label class=\"label\" for=\"autoApply\">Auto Apply</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"inactiveBeforeStart\" [(ngModel)]=daterangepickerOptions.inactiveBeforeStart id=\"inactiveBeforeStart\">\n\t\t\t\t\t<label class=\"label\" for=\"inactiveBeforeStart\">Inactive Before Start</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"disabled\" [(ngModel)]=daterangepickerOptions.disabled id=\"disabled\">\n\t\t\t\t\t<label class=\"label\" for=\"disabled\">Disabled</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"showRanges\" [(ngModel)]=\"daterangepickerOptions.showRanges\" id=\"showRanges\">\n\t\t\t\t\t<label class=\"label\" for=\"showRanges\">Show Ranges</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"noDefaultRangeSelected\" [(ngModel)]=\"daterangepickerOptions.noDefaultRangeSelected\" id=\"noDefaultRangeSelected\">\n\t\t\t\t\t<label class=\"label\" for=\"noDefaultRangeSelected\">No Default Range Selected</label>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<label class=\"label\">Position</label>\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<label class=\"label\" for=\"position-left\">Left</label>\n\t\t\t\t\t\t<input type=\"radio\" name=\"position\" value=\"left\" [(ngModel)]=\"daterangepickerOptions.position\" id=\"position-left\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<label class=\"label\" for=\"position-right\">Right</label>\n\t\t\t\t\t\t<input type=\"radio\" name=\"position\" value=\"right\" [(ngModel)]=\"daterangepickerOptions.position\" id=\"position-right\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<label class=\"label\" for=\"position-left\">Center</label>\n\t\t\t\t\t\t<input type=\"radio\" name=\"position\" value=\"center\" [(ngModel)]=\"daterangepickerOptions.position\" id=\"position-center\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h4>Configuration</h4>\n\t\t\t\t<pre>{{prettyPrintJSON(daterangepickerOptions)}}</pre>\n\t\t\t</div>\n\t\t</div> \n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>Live Demo</h3>\t\n\t\t\t<div class=\"col-md-6 flush\">\n\t\t\t\t<date-range-picker [class]=\"'col-md-12 form-control'\" [options]=\"daterangepickerOptions\" (rangeSelected)=\"rangeSelected($event)\">\n\t\t\t\t</date-range-picker>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
