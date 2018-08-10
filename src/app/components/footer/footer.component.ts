import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  private d = new Date();
  public year = this.d.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
