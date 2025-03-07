import { Component } from '@angular/core';
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton
} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [
    MatFabButton,
    MatFabAnchor,
    MatDivider,
    MatIconButton,
    MatIcon,
    MatAnchor,
    MatButton,
    RouterLink,
    MatMiniFabButton
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
