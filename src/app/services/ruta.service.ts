import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(
    private _router: Router
  ) {

  }

  Ubicacion(ruta: string) {
    this._router.navigate([ruta]);
  }
}
