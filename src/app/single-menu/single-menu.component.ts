import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuServiceService } from '../menu-service.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css'],
})
export class SingleMenuComponent implements OnInit {
  menuId?: number = undefined;
  menu?: Menu = undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private menuService: MenuServiceService
  ) {}
  ngOnInit(): void {
    this.menuId = this.activeRoute.snapshot.params['id'];
    this.menuService.getMenu(this.menuId).subscribe((menu) => {
      this.menu = menu;
    });
  }
}
