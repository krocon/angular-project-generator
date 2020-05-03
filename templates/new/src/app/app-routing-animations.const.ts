import { animate, group, query, style, transition, trigger } from "@angular/animations";

// const timings = '0.3s cubic-bezier(.35,0,.25,1)';
// const queryOptions = {optional: true};

export const animationLeftRight =

  trigger('routeAnimations', [
    transition( '* <=> *', [
      query(':enter,:leave', [
        style({
          position: 'fixed'
        })
      ],{ optional: true }),
      group([
        query( ':leave', [
          animate('500ms ease-in-out',
            style( {
              opacity: 0,
            })
          )
        ],{ optional: true }),
        query( ':enter', [
          style( {
            opacity: 0,
          }),
          animate('2s 250ms ease-in-out',
            style( {
              opacity: 1
            })
          )
        ],{ optional: true }),
      ])
    ])
  ]);
  /*
  trigger('routeAnimation',
    [

      // transition( '* <=> *', [
      //   query(':enter,:leave', [
      //     style({
      //       position: 'fixed'
      //     })
      //   ],{ optional: true })]),

      transition(
        '1 => 2, 2 => 3, 3 => 4, 4 => 5, 5 => 6',
        [
          style({height: '!'}),
          query(':enter', style({transform: 'translateX(100%)'}), queryOptions),
          query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0}), queryOptions),
          group(
            [
              query(
                ':leave', // animate the leave page away
                animate(timings, style({transform: 'translateX(-100%)'})), queryOptions),
              query(
                ':enter', // and now reveal the enter
                animate(timings, style({transform: 'translateX(0)'})), queryOptions
              ),
            ]),
        ]),
      transition(
        '6 => 5, 5 => 4, 4 => 3, 3 => 2, 2 => 1',
        [
          style({height: '!'}),
          query(':enter', style({transform: 'translateX(-100%)'}), queryOptions),
          query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0}), queryOptions),
          group([
            query(
              ':leave', // animate the leave page away
              animate(timings, style({transform: 'translateX(100%)'})), queryOptions),
            query(
              ':enter', // and now reveal the enter
              animate(timings, style({transform: 'translateX(0)'})), queryOptions),
          ]),
        ]),
    ]);
*/
