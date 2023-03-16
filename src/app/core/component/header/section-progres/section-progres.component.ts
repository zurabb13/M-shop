import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-section-progres',
  templateUrl: './section-progres.component.html',
  styleUrls: ['./section-progres.component.scss'],
})
export class SectionProgresComponent implements AfterViewInit {
  info = [
    { value: 98, color: '#F89828', text: 'Totally satisfied clients' },
    { value: 20, color: '#F52F6E', text: 'Years of experience' },
    { value: 9452, color: '#5A87FC', text: 'Working hours spent' },
    { value: 100, color: '#03CEA4', text: 'Succeeded projects' },
  ];
  ngAfterViewInit() {
    const swiper = new Swiper('.progres', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      breakpoints: {
        390: {
          slidesPerView: 1,
          autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
        },
      },
    });
  }
}
