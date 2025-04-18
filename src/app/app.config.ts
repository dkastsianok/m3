import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {NgxMatDateAdapter, NgxMatNativeDateAdapter} from '@ngxmc/datetime-picker';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};
