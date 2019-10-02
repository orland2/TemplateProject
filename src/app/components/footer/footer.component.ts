import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  numeroTelefono: string;
  numeroMesaCentral: string;
  ubicacionSucursal: string;
  path: string;

  constructor(
  ) {
    this.numeroTelefono = environment.numeroTelefono;
    this.numeroMesaCentral = environment.numeroMesaCentral;
    this.ubicacionSucursal = environment.ubicacionSucursal;
  }

  ngOnInit() {
  }

}
