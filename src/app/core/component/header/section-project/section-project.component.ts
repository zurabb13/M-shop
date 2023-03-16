import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-section-project',
  templateUrl: './section-project.component.html',
  styleUrls: ['./section-project.component.scss'],
})
export class SectionProjectComponent implements AfterViewInit {
  @ViewChild('slideText') slideText!: ElementRef;
  images: string[] = [
    'assets/img/service-1.jpg',
    'assets/img/service-2.jpg',
    'assets/img/service-3.jpg',
    'assets/img/service-4.jpg',
    'assets/img/service-4.jpg',
    'assets/img/service-4.jpg',
    'assets/img/service-4.jpg',
  ];
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    });
  }
}
