import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-section-partner',
  templateUrl: './section-partner.component.html',
  styleUrls: ['./section-partner.component.scss'],
})
export class SectionPartnerComponent implements AfterViewInit {
  clients = [
    {
      image: 'assets/img/service-1.jpg',
      text: `Ipsum aute sunt aliquip aute et occaecat.
        Anim minim do cillum eiusmod enim. Consectetur magna
        cillum consequat minim  laboris cillum laboris voluptate
        minim proident exercitation ullamco.`,
      name: 'zura baramia',
      position: 'Position, Company name',
    },
    {
      image: 'assets/img/service-2.jpg',
      text: `Ipsum aute sunt aliquip aute et occaecat.
        Anim minim do cillum eiusmod enim. Consectetur magna
        cillum consequat minim  laboris cillum laboris voluptate
        minim proident exercitation ullamco.`,
      name: 'zura baramia',
      position: 'Position, Company name',
    },
  ];
  partner: string[] = [
    'assets/img/partners/client-logo-1.png',
    'assets/img/partners/client-logo-2.png',
    'assets/img/partners/client-logo-3.png',
    'assets/img/partners/client-logo-4.png',
    'assets/img/partners/client-logo-5.png',
    'assets/img/partners/client-logo-3.png',
    'assets/img/partners/client-logo-2.png',
    'assets/img/partners/client-logo-2.png',
    'assets/img/partners/client-logo-2.png',
  ];
  ngAfterViewInit() {
    const swiper = new Swiper('.partners', {
      slidesPerView: 6,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 6,
        },
      },
    });
    const clientSwiper = new Swiper('.clients', {
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });
  }
}
