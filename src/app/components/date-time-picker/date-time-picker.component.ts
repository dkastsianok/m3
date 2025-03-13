import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormField, MatFormFieldModule, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter,
  NgxMatDateFormats,
  NgxMatDatepickerInput,
  NgxMatDatetimepicker,
  NgxMatNativeDateAdapter
} from '@ngxmc/datetime-picker';

export const DATE_TIME_PICKER_DISPLAY_FORMAT = 'DD/MM/YYYY HH:mm:ss';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

export const CUSTOM_DATE_TIME_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: DATE_TIME_PICKER_DISPLAY_FORMAT,
  },
  display: {
    dateInput: DATE_TIME_PICKER_DISPLAY_FORMAT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: DATE_TIME_PICKER_DISPLAY_FORMAT,
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-time-picker',
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimepicker,
    MatSuffix,
    MatFormField,
    NgxMatDatepickerInput,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatFormFieldModule
  ],
  providers: [
    {provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter},
    {
      provide: NGX_MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_TIME_FORMATS,
    },
  ],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.css'
})
export class DateTimePickerComponent {
  @ViewChild('pickerFrom') public picker?: MatDatepicker<Date>;
  tomorrow = new Date();
  dateMax = this.tomorrow.setDate(this.tomorrow.getDate() - 1);

  public control = new FormControl<Date | undefined>(undefined, {nonNullable: true});
  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  public openDatepickerPanel(): void {
    this.picker?.open();
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
