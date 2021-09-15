import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { _RouterModule } from './router.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    _RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
