import {Component} from '@angular/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressBarModule],
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
