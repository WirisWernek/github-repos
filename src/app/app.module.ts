import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositorioCardComponent } from './components/repositorio-card/repositorio-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RepositorioCardComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
