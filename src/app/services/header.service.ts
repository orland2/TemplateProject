import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private aparece = new BehaviorSubject(false);
  apareceHeader = this.aparece.asObservable();
  private aplica = new BehaviorSubject(false);
  aplicaCSS = this.aplica.asObservable();

  constructor() { }

  changeProgressConocer(apareceHeader: boolean) {
    this.aparece.next(apareceHeader)
  }

  changeAplicaCss(aplicaCSS: boolean) {
    this.aplica.next(aplicaCSS)
  }
}
