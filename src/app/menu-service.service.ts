import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  urlMenu: string = 'http://localhost:3000/menus';

  constructor(private http: HttpClient) {}

  getallmenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.urlMenu);
  }
  addmenu(menu: Menu): Observable<Menu[]> {
    return this.http.post<Menu[]>(this.urlMenu, menu);
  }
  updateMenu(menu: Menu, id: any): Observable<Menu[]> {
    return this.http.put<Menu[]>(this.urlMenu + '/' + id, menu);
  }
  getMenu(id: any): Observable<Menu> {
    return this.http.get<Menu>(`${this.urlMenu}/${id}`);
  }
  deleteMenu(id: any): Observable<Menu> {
    return this.http.delete<Menu>(`${this.urlMenu}/${id}`);
  }
}
