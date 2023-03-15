import { Component } from '@angular/core';

@Component({
  selector: 'app-section-progres',
  templateUrl: './section-progres.component.html',
  styleUrls: ['./section-progres.component.scss'],
})
export class SectionProgresComponent {
  info = [
    { value: 98, color: '#F89828', text: 'Totally satisfied clients' },
    { value: 20, color: '#F52F6E', text: 'Years of experience' },
    { value: 9452, color: '#5A87FC', text: 'Working hours spent' },
    { value: 100, color: '#03CEA4', text: 'Succeeded projects' },
  ];
}
