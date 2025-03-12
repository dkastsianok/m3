import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip',
  imports: [
    MatButton,
    MatTooltip
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {

}
