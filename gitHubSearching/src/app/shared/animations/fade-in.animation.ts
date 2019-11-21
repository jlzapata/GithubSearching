import {style, animate, trigger, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({opacity: 0}),
    animate('300ms', style({opacity: 1}))
  ])
]);
