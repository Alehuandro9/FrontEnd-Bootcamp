import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Persona {
  id: number | null = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  edad: number | null = null;
  nif: string | null = null;
  email: string | null = null;
}

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  elemento: Persona = new Persona();
  isAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.elemento = new Persona();
    this.isAdd = true;
  }
  edit(id: number): void {
    this.elemento = { id, nombre: 'Pepito', apellidos: 'Grillo', edad: 66, nif: null, email: 'pepito@grillo' }
    this.isAdd = false;
  }
  send(): void {
    alert(`Enviar ${this.isAdd? 'nuevo':'modificación'}: ${JSON.stringify(this.elemento)}`)
  }
  cancel(): void {

  }
}
