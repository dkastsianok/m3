import {Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-checkbox',
  imports: [
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);
}
