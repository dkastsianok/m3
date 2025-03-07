import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {ErrorStateMatcher, MatOption} from '@angular/material/core';
import {MatFormField} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-select',
  imports: [
    MatCheckbox,
    MatFormField,
    MatOption,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  disableSelect = new FormControl(false);

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}
