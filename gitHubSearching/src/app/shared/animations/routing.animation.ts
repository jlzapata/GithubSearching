import { animation, style, animate, trigger, state, transition } from '@angular/animations';

export const routingAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({opacity: 0, transform: 'skewX(-25deg) translateX(50%)'}),
    animate('500ms', style({opacity: 1,  transform: 'skewX(0deg) translateX(0)'}))
  ]),
  transition(':leave', [
    animate('300ms', style({opacity: 1,  transform: 'skewX(25deg) translateX(-50%)'}))
  ])
]);
