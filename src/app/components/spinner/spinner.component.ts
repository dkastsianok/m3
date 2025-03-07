import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCard, MatCardContent, MatCardModule} from '@angular/material/card';
import {MatProgressSpinner, MatProgressSpinnerModule, ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {MatSlider, MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-spinner',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
