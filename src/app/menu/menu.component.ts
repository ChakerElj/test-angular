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
  searchQuery: string = '';
  constructor(private menuService: MenuServiceService) {}
  ngOnInit(): void {
    this.menuService.getallmenu().subscribe((res) => {
      this.listMenu = res;
    });
  }

  deleteMenu(id: any) {
    this.menuService.deleteMenu(id).subscribe((res) => {
      console.log('menu deleted');
      this.refreshMenus();
    });
  }
  refreshMenus() {
    this.menuService.getallmenu().subscribe((res) => {
      this.listMenu = res;
    });
  }
  searchMenu(id: string) {
    if (this.searchQuery.trim() === '' || !this.searchQuery) {
      this.refreshMenus();
    }
    this.listMenu = this.listMenu.filter((menu) => {
      return menu.id === id;
    });
    console.log(this.listMenu);
  }
}
