import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DojoMailsComponent } from './dojo-mails/dojo-mails.component';


@NgModule({
  declarations: [
    AppComponent,
    DojoMailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
