import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
constructor()
{

}
  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true, mouseDrag: true, touchDrag: true,pullDrag: true,dots: false,
    navSpeed: 700, autoplay: true,
    autoplaySpeed :500,autoplayHoverPause:true,

    responsive: {

      50: { items: 1 }
    },nav: true
  }
}
