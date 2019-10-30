import { Component, OnInit } from '@angular/core';
import { Globals } from '../../models/globals';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss']
})
export class MenuHorizontalComponent implements OnInit {

  constructor(
    public globals: Globals
  ) {
  }

  ngOnInit() {
  }

}
