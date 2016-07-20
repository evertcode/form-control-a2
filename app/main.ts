import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  disableDeprecatedForms(), // disable deprecated forms
  provideForms(), // enable new forms module
]);