import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import * as AOS from 'aos';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() image!: string[];
  @ViewChild('slideText') slideText!: ElementRef;
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container');
  }
}
