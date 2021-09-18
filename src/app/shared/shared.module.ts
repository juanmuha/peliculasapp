import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
