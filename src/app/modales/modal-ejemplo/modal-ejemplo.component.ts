import {
  Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter,
  trigger, state, style, animate, transition
} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
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
export class ModalEjemploComponent implements OnInit {
  @Input() visible: boolean;
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() confirmar: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }


  ngOnInit() {
  };

  cerrarFn() {
    this.visible = false;
    this.cerrar.emit(false);
  };

  confirmarFn() {
    this.visible = false;
    this.confirmar.emit(false);
  };

}
