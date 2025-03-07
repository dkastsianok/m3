import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatPrefix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [MatButton, MatDrawer, RouterOutlet, MatPrefix, RouterLink, MatDrawerContainer, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'm3';

  menu = [
    {title: 'Button', icon: 'home', link: '/button'},
    {title: 'Badge', icon: 'info', link: '/badge'},
    {title: 'Button Toggle', icon: 'mail', link: '/button-toggle'},
    {title: 'Input', icon: 'mail', link: '/input'},
    {title: 'Select', icon: 'mail', link: '/select'},
    {title: 'Slide Toggle', icon: 'mail', link: '/slide-toggle'},
    {title: 'Checkbox', icon: 'mail', link: '/checkbox'},
    {title: 'Paginator', icon: 'mail', link: '/paginator'},
    {title: 'Table', icon: 'mail', link: '/table'},
    {title: 'Spinner', icon: 'mail', link: '/spinner'},
    {title: 'Date Time Picker', icon: 'mail', link: '/picker'},
  ]
}
