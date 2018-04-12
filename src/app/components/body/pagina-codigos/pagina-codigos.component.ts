import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-codigos',
  templateUrl: './pagina-codigos.component.html',
  styleUrls: ['./pagina-codigos.component.css']
})
export class PaginaCodigosComponent implements OnInit {

  // region TABLA ICP
  public ShowTablaICP = false;
  public ShowDetalleEntrega = false;
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Orden entrega', name: 'ID_PEDIDO', classTD: 'text-center', classHijos: 'btn-link' },
    { title: 'Tienda', name: 'TIENDA', filtering: { filterString: '', placeholder: '' } },
    { title: 'Artículo', name: 'DESCRIPCION_REF', filtering: { filterString: '', placeholder: '' } },
    { title: 'Creación', name: 'F_PEDIDO', isDate: true },
    { title: 'Dst. Entrega', name: 'DISTANCIA_ENTREGA', hide: true, className: 'hide' },
    { title: 'Resultado encuesta', name: 'ENCUESTA_PUNTUACION', classTD: 'text-center', hide: true, className: 'hide' },
  ];
  public config: any = {
    paginPaddingPages: 3,
    itemsPerPage: 5,
    paging: true,
    excel: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered'],
  };
  public data = new Array<any>();
  // endregion END TABLA ICP

  public datosPrueba = [];

  constructor() {
    debugger;
    this.datosPrueba = [
      {
        ID_PEDIDO: '444',
        TIENDA: 'Tienda 1',
        DESCRIPCION_REF: 'Descripcion 1',
        F_PEDIDO: '26/04/2018',
        DISTANCIA_ENTREGA: '20 km',
        ENCUESTA_PUNTUACION: '5'
      },
      {
        ID_PEDIDO: '555',
        TIENDA: 'Tienda 2',
        DESCRIPCION_REF: 'Descripcion 2',
        F_PEDIDO: '27/04/2018',
        DISTANCIA_ENTREGA: '25 km',
        ENCUESTA_PUNTUACION: '3'
      },
      {
        ID_PEDIDO: '777',
        TIENDA: 'Tienda 3',
        DESCRIPCION_REF: 'Descripcion 3',
        F_PEDIDO: '28/04/2018',
        DISTANCIA_ENTREGA: '30 km',
        ENCUESTA_PUNTUACION: '4'
      },
      {
        ID_PEDIDO: '668',
        TIENDA: 'Tienda 4',
        DESCRIPCION_REF: 'Descripcion 4',
        F_PEDIDO: '26/04/2018',
        DISTANCIA_ENTREGA: '20 km',
        ENCUESTA_PUNTUACION: '5'
      },
      {
        ID_PEDIDO: '785',
        TIENDA: 'Tienda 5',
        DESCRIPCION_REF: 'Descripcion 5',
        F_PEDIDO: '27/04/2018',
        DISTANCIA_ENTREGA: '25 km',
        ENCUESTA_PUNTUACION: '3'
      },
      {
        ID_PEDIDO: '985',
        TIENDA: 'Tienda 6',
        DESCRIPCION_REF: 'Descripcion 6',
        F_PEDIDO: '28/04/2018',
        DISTANCIA_ENTREGA: '30 km',
        ENCUESTA_PUNTUACION: '4'
      },
      {
        ID_PEDIDO: '025',
        TIENDA: 'Tienda 7',
        DESCRIPCION_REF: 'Descripcion 7',
        F_PEDIDO: '26/04/2018',
        DISTANCIA_ENTREGA: '20 km',
        ENCUESTA_PUNTUACION: '5'
      },
      {
        ID_PEDIDO: '478',
        TIENDA: 'Tienda 8',
        DESCRIPCION_REF: 'Descripcion 8',
        F_PEDIDO: '27/04/2018',
        DISTANCIA_ENTREGA: '25 km',
        ENCUESTA_PUNTUACION: '3'
      },
      {
        ID_PEDIDO: '885',
        TIENDA: 'Tienda 9',
        DESCRIPCION_REF: 'Descripcion 9',
        F_PEDIDO: '28/04/2018',
        DISTANCIA_ENTREGA: '30 km',
        ENCUESTA_PUNTUACION: '4'
      },
    ];

  }


  ngOnInit() {
    setTimeout(() => {
      this.data = this.setDatos(this.datosPrueba);
      this.ShowTablaICP = true;
    }, 2000);
  }

  setDatos(datos) {
    const lista = [];
    datos.map((o) => {
      const slot = o.HORA_SLOT === null ? o.TURNO : `${o.HORA_SLOT} ${o.TURNO}`;
      const detalle = {
        'ID_PEDIDO': o.ID_PEDIDO,
        'TIENDA': o.TIENDA,
        'DESCRIPCION_REF': o.DESCRIPCION_REF,
        'F_PEDIDO': o.F_INSERT,
        'DISTANCIA_ENTREGA': o.DISTANCIA_ENTREGA + 'KM',
        'ENCUESTA_PUNTUACION': o.ENCUESTA_PUNTUACION
      };

      lista.push(detalle);
    });
    return lista;
  }

}
