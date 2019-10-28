import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Globals } from './models/globals';
import { Alert } from './models/alert';
import { User } from './models/user';
import { Menu } from './models/menu';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isOpen: boolean;
  aplica: boolean;
  menus: Menu[];
  rutaIconos: string;
  existeError: boolean;

  constructor(
    private userService: UserService,
    public globals: Globals,
    public router: Router,
  ) {
    this.globals.user = {} as User;
    this.aplica = false;
    this.menus = [];
    this.rutaIconos = environment.iconos;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.get().subscribe((user: User) => {
      this.globals.user = user;
      this.menus = user.Menus;
      // console.log(this.globals)
    }, error => {
      Alert.error(error);
    });
  }

  logout() {
    sessionStorage.removeItem('auth');
    window.location.replace(environment.sauUrl);
  }

}
