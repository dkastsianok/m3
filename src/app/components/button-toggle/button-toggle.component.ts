import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.css'
})
export class ButtonToggleComponent {

}
