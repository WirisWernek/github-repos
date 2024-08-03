import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule),
        provideHttpClient(withInterceptorsFromDi()),
    ],
}).catch((err) => console.error(err));
