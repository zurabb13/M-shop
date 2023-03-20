import { Component } from '@angular/core';

@Component({
  selector: 'app-service-design',
  templateUrl: './app-service-design.component.html',
  styleUrls: ['./app-service-design.component.scss'],
})
export class AppServiceDesignComponent {
  service = [
    {
      img: 'assets/img/service-1.jpg',
      title: 'Construction',
      text:
        'Sapien, feugiat faucibus orci arcu, vulputate. ' +
        'Tristique varius consectetur vulputate arcu, scelerisque ' +
        'nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. ' +
        'Mattis habitant venenatis, gravida posuere massa ac interdum.' +
        ' Eget aliquam dignissim ut vestibulum. ',
    },
    {
      img: 'assets/img/service-2.jpg',
      title: 'Project Development',
      text:
        'Volutpat tellus mauris sit sit. Posuere ut sit vestibulum ' +
        'amet viverra in. Est nulla lectus purus tincidunt massa tortor. ' +
        'Hendrerit vulputate elementum blandit massa vitae amet felis eget. ',
    },
    {
      img: 'assets/img/service-3.jpg',
      title: 'Interior Design',
      text:
        'Eleifend orci massa et facilisis orci feugiat ac. ' +
        'Congue in ut lacus, turpis accumsan gravida. Aliquet ' +
        'mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, ' +
        'mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa ' +
        'pellentesque nulla duis. Arcu dictum metus sed purus senectus' +
        ' faucibus eget elementum pretium. ',
    },
    {
      img: 'assets/img/service-4.jpg',
      title: 'Repairs',
      text:
        'Facilisis cursus feugiat sit pulvinar amet. ' +
        'Ac facilisi dictum commodo, tortor gravida pretium, orci.' +
        ' Nunc sit sollicitudin id egestas mattis. Turpis viverra' +
        ' nec urna ultrices urna',
    },
  ];
}
