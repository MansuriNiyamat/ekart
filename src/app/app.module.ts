import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HooksComponent } from './hooks/hooks.component';
import {SetBackground} from './customDirectives/setBackground.directive';
import { Highlight } from "./customDirectives/highlight.directive";
import { DisableItemDirective } from './customDirectives/disable-item.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { httpInterceptService } from './services/auth-intercept.service';
@NgModule({
  declarations: [
    SetBackground,Highlight,
    AppComponent, ChessBoardComponent, DataBindingComponent, DirectivesComponent, HooksComponent, DisableItemDirective, ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: httpInterceptService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
