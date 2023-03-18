import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-section-news',
  templateUrl: './section-news.component.html',
  styleUrls: ['./section-news.component.scss'],
})
export class SectionNewsComponent implements OnInit {
  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refreshHard);
  }
}
