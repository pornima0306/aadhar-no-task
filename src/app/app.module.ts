import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AadharCardDirective } from './shared/directives/aadhar-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    AadharCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
