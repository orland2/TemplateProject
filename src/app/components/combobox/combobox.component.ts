import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    public rutaService: RutaService
  ) { }

  ngOnInit() {
  }

}
