import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';
import { MatDialog } from '@angular/material/dialog';
import { AgregarPersonaComponent } from '../agregar-persona/agregar-persona.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RutValidator } from 'ng2-rut';

export interface Persona {
  nombre: string;
  correo: string;
  activo: boolean;
}

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.scss']
})
export class FormularioUnoComponent implements OnInit {

  titulosPersona: string[];
  persona: Persona[];
  adherirPersona: Persona;
  indiceSeleccionado: number;
  personaMantenedorFG: FormGroup;

  constructor(
    public dialog: MatDialog,
    public rutaService: RutaService,
    fb: FormBuilder,
    rv: RutValidator
  ) {
    this.titulosPersona = ['Nombre', 'Correo', 'Activo', 'Acciones'];
    this.persona = [{ nombre: 'Template', correo: 'template@gmail.com', activo: false }];
    this.adherirPersona = { nombre: null, correo: null, activo: false };
    this.personaMantenedorFG = fb.group({
      rut: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), rv]],
      fechaNacimiento: ['',[Validators.required]],
      nombres: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      apellidos: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      ciudad: ['',[Validators.required]],
      comuna: ['',[Validators.required]],
      calle: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      numero: ['', [Validators.required, Validators.min(1), Validators.max(9999)]],
      blockDpto: ['', [Validators.required, Validators.min(1), Validators.max(9999)]],
      fono: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      celular: ['', [Validators.required, Validators.min(100000000), Validators.max(999999999)]],
      email: ['', [Validators.email]]
    });
  }

  ngOnInit() {
  }

  agregarPersona() {
    const dialogRef = this.dialog.open(AgregarPersonaComponent, {
      width: 'auto',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      data: this.adherirPersona
    });

    dialogRef.afterClosed().subscribe((result: Persona) => {
      if (result && result.nombre) {
        this.persona.push(result);
      }
    });
  }

  seleccionar(indice: number) {
    this.indiceSeleccionado = indice;
  }

  modificarPersona() {
    const dialogRef = this.dialog.open(AgregarPersonaComponent, {
      width: 'auto',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      data: this.persona[this.indiceSeleccionado]
    });

    dialogRef.afterClosed().subscribe((result: Persona) => {
      if (result && result.nombre) {
        this.persona[this.indiceSeleccionado] = result;
      }
    });
  }

  eliminarPersona() {
    this.persona.splice(this.indiceSeleccionado,1);
  }

  guardar() {

  }

  cancelar() {

  }

  getErrorMessageRut() {
    return this.rut.hasError('required') ? 'Debe ingresar un rut válido' :
      this.rut.hasError('rv') ? 'No es un rut válido' :
        'No es un rut válido';
  }

  getErrorMessageFechaNacimiento() {
    return 'Debe ingresar fecha de nacimiento';
  }

  getErrorMessageNombres() {
    return 'Debe ingresar nombres';
  }

  getErrorMessageApellidos() {
    return 'Debe ingresar apellidos';
  }
  
  getErrorMessageCiudad() {
    return 'Debe ingresar ciudad';
  }

  getErrorMessageComuna() {
    return 'Debe ingresar comuna';
  }

  getErrorMessageCalle() {
    return 'Debe ingresar calle';
  }

  getErrorMessageNumero() {
    return 'Debe ingresar numeración';
  }

  getErrorMessageBlockDpto() {
    return 'Debe ingresar Block/Dpto';
  }

  getErrorMessageFono() {
    return 'Debe ingresar teléfono fijo';
  }

  getErrorMessageCelular() {
    return 'Debe ingresar celular';
  }

  getErrorMessageEmail() {
    return 'Debe ingresar email';
  }

  get rut() { return this.personaMantenedorFG.get('rut'); }
  get fechaNacimiento() { return this.personaMantenedorFG.get('fechaNacimiento'); }
  get nombres() { return this.personaMantenedorFG.get('nombres'); }
  get apellidos() { return this.personaMantenedorFG.get('apellidos'); }
  get ciudad() { return this.personaMantenedorFG.get('ciudad'); }
  get comuna() { return this.personaMantenedorFG.get('comuna'); }
  get calle() { return this.personaMantenedorFG.get('calle'); }
  get numero() { return this.personaMantenedorFG.get('numero'); }
  get blockDpto() { return this.personaMantenedorFG.get('blockDpto'); }
  get fono() { return this.personaMantenedorFG.get('fono'); }
  get celular() { return this.personaMantenedorFG.get('celular'); }
  get email() { return this.personaMantenedorFG.get('email'); }

}
