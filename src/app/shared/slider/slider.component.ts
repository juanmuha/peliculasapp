import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {  

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      
      loop: true
    
    });
  }

}
