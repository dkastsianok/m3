import {Component} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
