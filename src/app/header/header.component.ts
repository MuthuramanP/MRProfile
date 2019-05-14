import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_service/menuservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public objMenuservice: MenuService) { }

  ngOnInit() {
  }
  onMenuClick(argVal: string) {
    if (argVal == "home")
      this.objMenuservice.whichNav = "home";
    else if (argVal == "about")
      this.objMenuservice.whichNav = "about";
    else if (argVal == "work")
      this.objMenuservice.whichNav = "work";
      else if (argVal == "contact")
      this.objMenuservice.whichNav = "contact";
      else if (argVal == "service")
      this.objMenuservice.whichNav = "service";
  }
}
