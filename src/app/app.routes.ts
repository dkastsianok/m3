import {Routes} from '@angular/router';

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
  {
    path: 'card',
    loadComponent: () => import('./components/card/card.component').then(c => c.CardComponent),
  },
  {
    path: 'chips',
    loadComponent: () => import('./components/chips/chips.component').then(c => c.ChipsComponent)
  },
  {
    path: 'progress',
    loadComponent: () => import('./components/progress/progress.component').then(c => c.ProgressComponent)
  },
  {
    path: 'radio',
    loadComponent: () => import('./components/radio/radio.component').then(c => c.RadioComponent)
  },
  {
    path: 'dialog',
    loadComponent: () => import('./components/dialog/dialog.component').then(c => c.DialogComponent),
  },
  {
    path: 'menu',
    loadComponent: () => import('./components/menu/menu.component').then(c => c.MenuComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () => import('./components/tooltip/tooltip.component').then(c => c.TooltipComponent),
  },
  {
    path: 'bottom-sheet',
    loadComponent: () => import('./components/bottom-sheet/bottom-sheet.component').then(c => c.BottomSheetOverviewExample),
  },
  {
    path: 'snack-bar',
    loadComponent: () => import('./components/snackbar/snackbar.component').then(c => c.SnackbarComponent),
  },
  {
    path: 'tags',
    loadComponent: () => import('./components/tags/tags.component').then(c => c.TagsComponent),
  },
  {
    path: 'typography',
    loadComponent: () => import('./components/typography/typography.component').then(c => c.TypographyComponent),
  }
];
