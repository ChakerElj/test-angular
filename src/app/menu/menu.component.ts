import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuServiceService } from '../menu-service.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  listMenu: Menu[] = [];
  constructor(private menuService: MenuServiceService) {}
  ngOnInit(): void {
    this.menuService.getallmenu().subscribe((res) => {
      this.listMenu = res;
    });
  }
}
