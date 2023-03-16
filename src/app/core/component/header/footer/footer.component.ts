import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
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
}
