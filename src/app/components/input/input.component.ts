import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDivider} from '@angular/material/divider';
import {MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';

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
    MatInput,
    MatIcon,
    MatIconButton,
    ReactiveFormsModule,
    MatLabel,
    MatHint,
    MatError,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatDivider, NgIf
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  value = 'Clear me';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
