import { Component } from '@angular/core';
import {MatBadge} from '@angular/material/badge';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  imports: [
    MatBadge,
    MatButton,
    MatIcon
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
