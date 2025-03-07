import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter, NgxMatDateFormats, NgxMatDatepickerInput,
  NgxMatDatetimepicker,
  NgxMatNativeDateAdapter
} from '@ngxmc/datetime-picker';

export const DATE_TIME_PICKER_DISPLAY_FORMAT = 'DD/MM/YYYY HH:mm:ss';

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
    MatLabel
  ],
  providers: [
    { provide: NgxMatDateAdapter, useClass: NgxMatNativeDateAdapter },
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

  public control = new FormControl<Date | undefined>(undefined, {nonNullable: true});
  public openDatepickerPanel(): void {
      this.picker?.open();
  }
}
