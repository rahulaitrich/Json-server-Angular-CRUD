import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsModule } from './students/students.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), BrowserModule,provideHttpClient(), CommonModule, ReactiveFormsModule, FormsModule, StudentsModule,RouterModule],
};
