import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./components/buttons/buttons.component').then(c => c.ButtonsComponent),
  },
  {
    path: 'badge',
    loadComponent: () => import('./components/badge/badge.component').then(c => c.BadgeComponent),
  },
  {
    path: 'button-toggle',
    loadComponent: () => import('./components/button-toggle/button-toggle.component').then(c => c.ButtonToggleComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./components/input/input.component').then(c => c.InputComponent),
  },
  {
    path: 'select',
    loadComponent: () => import('./components/select/select.component').then(c => c.SelectComponent),
  },
  {
    path: 'slide-toggle',
    loadComponent: () => import('./components/slide-toggle/slide-toggle.component').then(c => c.SlideToggleComponent),
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./components/checkbox/checkbox.component').then(c => c.CheckboxComponent),
  },
  {
    path: 'paginator',
    loadComponent: () => import('./components/paginator/paginator.component').then(c => c.PaginatorComponent),
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table/table.component').then(c => c.TableComponent),
  },
  {
    path: 'spinner',
    loadComponent: () => import('./components/spinner/spinner.component').then(c => c.SpinnerComponent),
  },
  {
    path: 'picker',
    loadComponent: () => import('./components/date-time-picker/date-time-picker.component').then(c => c.DateTimePickerComponent),
  },
];
