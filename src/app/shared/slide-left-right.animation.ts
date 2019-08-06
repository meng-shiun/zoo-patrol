import {
  query,
  style,
  animate,
  trigger,
  transition,
  group
} from '@angular/animations';

const toRight = [
  query(':enter, :leave', [ style({ position: 'fixed', width: '100%' }) ]),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
    ]),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ])
];

const toLeft = [
  query(':enter, :leave', [ style({ position: 'fixed', width: '100%' }) ]),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
    ]),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
    ])
  ])
];

export const slideLeftRight = trigger('slide-left-right', [
  transition(':increment', toRight),
  transition(':decrement', toLeft)
]);
