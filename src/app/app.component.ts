import {Component, Renderer2, RendererFactory2} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatPrefix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
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
    {title: 'Typography', link: '/typography'},
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
    {title: 'Card', icon: 'mail', link: '/card'},
    {title: 'Chips', icon: 'mail', link: '/chips'},
    {title: 'Progress', icon: 'mail', link: '/progress'},
    {title: 'Radio Button', icon: 'mail', link: '/radio'},
    {title: 'Dialog', icon: 'mail', link: '/dialog'},
    {title: 'Menu', icon: 'mail', link: '/menu'},
    {title: 'Tooltip', icon: 'mail', link: '/tooltip'},
    {title: 'Bottom Sheet', icon: 'mail', link: '/bottom-sheet'},
    {title: 'Snackbar', icon: 'mail', link: '/snack-bar'},
    {title: 'Tags', icon: 'mail', link: '/tags'},
  ]
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme); // Save user preference
  }

  private applyTheme(): void {
    this.renderer.removeClass(document.documentElement, 'light-theme');
    this.renderer.removeClass(document.documentElement, 'dark-theme');
    this.renderer.addClass(document.documentElement, this.currentTheme);
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme();
  }
}
