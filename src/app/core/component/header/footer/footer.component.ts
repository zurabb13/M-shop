import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  baram = 'baram';
  address = '8502 Preston Rd. Inglewood, New York';
  call = '(405) 555-0128';
  email = 'hello@createx.com';
  footerLogo = [
    'assets/img/footer/wt.svg',
    'assets/img/footer/ms.svg',
    'assets/img/footer/fb.svg',
    'assets/img/footer/tw.svg',
    'assets/img/footer/yt.svg',
  ];
  goToTop(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
