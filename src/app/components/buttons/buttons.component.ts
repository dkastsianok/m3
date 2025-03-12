import {Component} from '@angular/core';
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-buttons',
  imports: [
    MatDivider,
    MatIconButton,
    MatIcon,
    MatAnchor,
    MatButton,
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
