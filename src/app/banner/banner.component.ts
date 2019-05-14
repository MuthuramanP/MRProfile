import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_service/menuservice';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public objMenuService: MenuService) { }

  ngOnInit() {
  }

}
