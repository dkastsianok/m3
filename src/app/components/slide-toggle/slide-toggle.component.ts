import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle',
  imports: [
    MatCardContent,
    MatCard,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.css'
})
export class SlideToggleComponent {
  checked = false;
  disabled = false;
}
