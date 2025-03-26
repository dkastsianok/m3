import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {ErrorStateMatcher, MatOption} from '@angular/material/core';
import {MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  imports: [
    MatFormField,
    FormsModule,
    MatInputModule,
    MatIcon,
    MatIconButton,
    ReactiveFormsModule,
    MatLabel,
    MatHint,
    MatError,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, NgIf, MatOption, MatSelect
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  value = 'Clear me';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  telephoneFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]);
  disabledFormControl = new FormControl({value: 'Disabled', disabled: true});
  textareaFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();


  disableSelect = new FormControl(false);

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

}
