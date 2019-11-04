import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Persona {
  nombre: string;
  correo: string;
  activo: boolean;
}

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.scss']
})
export class AgregarPersonaComponent implements OnInit {

  personaFG: FormGroup;
  persona: Persona;

  constructor(
    public dialogRef: MatDialogRef<AgregarPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona,
    fb: FormBuilder
  ) { 
    this.persona = data;
    this.personaFG = fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      correo: ['', [Validators.required, Validators.email]],
      activo: [false]
    });
    if (data.nombre) {
      this.nombre.setValue(data.nombre);
      this.correo.setValue(data.correo);
      this.activo.setValue(data.activo);
    }
  }

  ngOnInit() {
  }

  guardar() {
    this.persona.nombre = this.nombre.value;
    this.persona.correo = this.correo.value;
    this.persona.activo = this.activo.value;
    this.dialogRef.close(this.persona);
  }

  cancelar() {
    this.dialogRef.close(this.data);
  }

  getErrorMessageNombre() {
    return 'Debe ingresar un nombre';
  }

  getErrorMessageCorreo() {
    return 'Debe ingresar un correo válido';
  }

  get nombre() { return this.personaFG.get('nombre'); }
  get correo() { return this.personaFG.get('correo'); }
  get activo() { return this.personaFG.get('activo'); }

}
