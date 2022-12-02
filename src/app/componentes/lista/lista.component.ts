import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  public nombre: string;
  public alumnos=[
    "Ariadna Rojas",
    "Ernesto Eduardo Lopez Lopez",
    "",
    "Astrid Rojas",
    "Oswaldo Diaz",
    "",
    "Mauricio",
    "Nicolas Kreien Wheler",
    "Francisco Pug",
    '',
    "Andrea",
    "Jon Snow",
    ];

  public mostrar: boolean;

    constructor() { }

    ngOnInit(): void{

    }

    eliminarvacios1():void{
      this.alumnos=this.alumnos.filter(nombre=>nombre!='');
    }

  
  
}