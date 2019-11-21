import { animation, style, animate, trigger, state, transition } from '@angular/animations';

export const enterLeaveAnimation = trigger('addingRemoving', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateX(50%)'}),
    animate('300ms', style({opacity: 1,  transform: 'translateX(0)'}))
  ])
]);
