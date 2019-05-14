import { Component } from '@angular/core';
import { MenuService } from './_service/menuservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Muthuraman';
  constructor(public objMenuservice: MenuService) {

  }
}
