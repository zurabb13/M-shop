import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() image!: string[];
  @ViewChild('slideText') slideText!: ElementRef;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container');
  }
}
