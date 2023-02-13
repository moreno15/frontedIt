import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AutoFocus } from './autofocus.directive';


import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';




@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
    AutoFocus

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
