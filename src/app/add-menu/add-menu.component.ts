import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  constructor(
    private menuService: MenuServiceService,
    private router: Router
  ) {}
  menuForm!: FormGroup;
  id: number = 0;
  ngOnInit(): void {
    this.menuForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get_titre() {
    return this.menuForm.get('titre');
  }
  get_description() {
    return this.menuForm.get('description');
  }

  increment() {
    this.id++;
  }

  submitMenuForm() {
    let menu: Menu = {
      id: this.id,
      title: this.get_titre()?.value,
      description: this.get_description()?.value,
      approved: false,
      mark: 0,
      image: '',
      reservations: [],
    };
    this.increment();
    this.menuService.addmenu(menu).subscribe(
      (res) => {
        console.log(res);
        console.log('Menu ajouter avec succes');
      },
      (err) => {
        console.log(err);
        console.log('Erreur lors de l ajout du menu');
      }
    );
    this.router.navigate(['/menu']);
  }
}
