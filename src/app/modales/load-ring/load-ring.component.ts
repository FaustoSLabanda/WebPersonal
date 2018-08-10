import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'app-load-ring',
  templateUrl: './load-ring.component.html',
  styleUrls: ['../../../assets/css/dialog.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class LoadRingComponent implements OnInit {
  @Input() visible: boolean;
  constructor() { }

  ngOnInit() {
  }

}
