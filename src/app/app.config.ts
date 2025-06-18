import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from "@angular/core";
import { provideHttpClient, withFetch } from '@angular/common/http';
registerLocaleData(localeFr);


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: "fr" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" },
     provideHttpClient(withFetch())
  ],
};
