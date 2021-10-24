import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule } from "@taiga-ui/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuiMarkerIconModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiMarkerIconModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
