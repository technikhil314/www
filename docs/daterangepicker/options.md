---
id: configuration-options
title: Options
---

Currently, these options are available but I will keep on developing and adding more and more options

<table>
    <thead>
        <tr>
            <th>Option Name</th>
            <th>Type</th>
            <th>Purpose</th>
            <th>Default Value</th>
            <th>Possible Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>format</td>
            <td>string</td>
            <td>format that this date and time range picker will use to communicate with your code</td>
            <td>"YYYY-MM-DD"</td>
            <td>As per <a href="https://day.js.org/"> dayjs </a> standard formats</td>
        </tr>
        <tr>
            <td>displayFormat</td>
            <td>string</td>
            <td>format that will be displayed to end user</td>
            <td>Same as format</td>
            <td>As per <a href="https://day.js.org/"> dayjs </a> standard formats</td>
        </tr>
        <tr>
            <td>startDate</td>
            <td>string, dayjs instance</td>
            <td>
                Default start date when this components is rendered for first time. <br/>
                <em>Format of this date should be in line with format option's value above</em>
            </td>
            <td>Current Systetm Date</td>
            <td>date string in line with format option's value above</td>
        </tr>
        <tr>
            <td>endDate</td>
            <td>string, dayjs instance</td>
            <td>
                Default end date when this components is rendered for first time. <br/>
                <em>Format of this date should be in line with format option's value above</em>
            </td>
            <td>Current Systetm Date</td>
            <td>date string in line with format option's value above</td>
        </tr>
        <tr>
            <td>minDate</td>
            <td>string, dayjs instance</td>
            <td>
                Default minimum date not including this date. <br/>
                <em>End user will not be able select all dates before this date. </em> <br/>
                <strong>Format of this date should be in line with format option's value above</strong>
            </td>
            <td>null</td>
            <td>date string in line with format option's value above</td>
        </tr>
        <tr>
            <td>maxDate</td>
            <td>string, dayjs instance</td>
            <td>
                Default maximum date not including this date. <br/>
                <em>End user will not be able select all dates after this date.</em> <br/>
                <strong>Format of this date should be in line with format option's value above</strong>
            </td>
            <td>null</td>
            <td>date string in line with format option's value above</td>
        </tr>
        <tr>
            <td>inactiveBeforeStart</td>
            <td>boolean</td>
            <td>
                Whether to blur dates that are before selected start date in left calendar.<br/> 
                <em>This option applies to right calendar only</em>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>autoApply</td>
            <td>boolean</td>
            <td>
                Hides apply and cancel buttons <br/>
                <em>applies as soon as user selects end date</em>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>showRanges</td>
            <td>boolean</td>
            <td>
                if true, Shows default ranges below apply and cancel button<br/>
                <em>
                    This is related to preDefinedRanges option
                </em><br/>
                <strong>
                    If not preDefinedRanges is supplied default ranges are shown which includes Today, Yesterday, last 7 day, This month, Last Month
                </strong>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>preDefinedRanges</td>
            <td> Array of object shown as <a href="#custom-range-options">below</a>.</td>
            <td>
                Custom ranges if you want to define your own ranges. <br/>
                <em>Requires showRanges set to true to be useful</em><br/>
                <strong>
                    Requires dayjs installed. As custom ranges are accepted in dayjs format only.
                </strong>
            </td>
            <td>see <a href="#custom-range-options">below</a> for more details</td>
            <td>see <a href="#custom-range-options">below</a> for more details</td>
        </tr>
        <tr>
            <td>noDefaultRangeSelected</td>
            <td>boolean</td>
            <td>
                This option set the startDate and endDate options to blank on first render.<br/>
                <em>
                    Setting this to true will discard passed startDate and endDate
                </em>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>singleCalendar</td>
            <td>boolean</td>
            <td>
                Show only one calendar (left one). <br/>
                <em>So you do not need another datepicker for single month.</em>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>position</td>
            <td>string</td>
            <td>
                position of the flyout which will open. <br/> 
                <em>By default it opens on left edge of input box. </em> <br/>
                <strong>
                    This is intelligently overridden based on space available on left or right.
                </strong>
            </td>
            <td>'left'</td>
            <td>'left','right','center'</td>
        </tr>
        <tr>
            <td>theme</td>
            <td>string</td>
            <td>theme for overall component</td>
            <td>'light'</td>
            <td>'light','dark'</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>Whether to disable the main input control</td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>timePicker</td>
            <td>object</td>
            <td>Whether to show timepicker</td>
            <td>null</td>
            <td>
                Object explained as <a href="#time-picker-options">below</a><br />
                <strong>Setting this to truthy will automatically set auto apply to false</strong>
            </td>
        </tr>
        <tr>
            <td>disableBeforeStart</td>
            <td>boolean</td>
            <td>
                Whether to disable dates that are before selected start date in left calendar.<br/> 
                <em>This option applies to right calendar only</em>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>alwaysOpen</td>
            <td>boolean</td>
            <td>
                Whether to keep the calendars always open. <br/>
                <em>This option removes the main input box where range is shown</em><br/>
                <strong>Setting this to true not respect position</strong>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>required</td>
            <td>boolean</td>
            <td>
                Sets required attribute to the input box<br/>
                <em>(makes sense only if used inside form)</em>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
        <tr>
            <td>weekStartsOn</td>
            <td>number (0-6)</td>
            <td>
                Sets start day of week<br/>
                <em>0 is sunday and 6 is saturday.</em><br/>
                <strong>
                    Absolute value is taken in case of negative values. Any value above 6 is taken modulo 7.
                </strong>
            </td>
            <td>0</td>
            <td>0-6</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>string</td>
            <td>
                Sets placeholder for main input box
            </td>
            <td>[Empty string]</td>
            <td>Any string literal</td>
        </tr>
        <tr>
            <td>readOnly</td>
            <td>boolean</td>
            <td>
                If true, Makes the main input box read only. <br/>
                <small><em>But keeps interactiveness of the input box.</em></small>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
         <tr>
            <td>hideControls</td>
            <td>boolean</td>
            <td>
                Show/hide entire row of buttons below calendars(apply, cancel, clear) <br/>
                <small><em>Useful if autoapply is set to true.</em></small>
            </td>
            <td>false</td>
            <td>true,false</td>
        </tr>
    </tbody>
</table>

### Custom Range Options

For custom range, Pass options as below. For this you need to pass <a href="https://day.js.org/">dayjs</a> objects.
:warning: Custom ranges should always be passed in dayjs objects

```js
preDefinedRanges: [
  {
    name: "Day After tomorrow",
    value: {
      start: dayjs().add(2, "days"),
      end: dayjs().add(2, "days"),
    },
  },
  {
    name: "This week",
    value: {
      start: dayjs(),
      end: dayjs().add(7, "days"),
    },
  },
];
```

All dates are supposed to be string and in format as you are passing.
You can also

```ts
import { Options } from "angular-datetimerangepicker";
```

class for passing options to the component.

### Time Picker Options

Timepicker options expects an object containing following keys as timepicker options

<table>
    <thead>
        <tr>
            <th>Option Name</th>
            <th>Type</th>
            <th>Purpose</th>
            <th>Default Value</th>
            <th>Possible Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>minuteInterval</td>
            <td>(integer)number</td>
            <td>The interval by which minutes will increase/decrease when user changes minutes in timepicker</td>
            <td>1</td>
            <td>anything between 1 to 59. If you supply value greater or equal 60 then that value mod 60 is taken as actual value</td>
        </tr>
    </tbody>
</table>
