import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  image = [
    'assets/img/bg-image.jpg',
    'assets/img/bg-image-2.jpg',
    'assets/img/bg-image-3.jpg',
    'assets/img/bg-image-4.jpg',
  ];
  ngOnInit() {}
}
