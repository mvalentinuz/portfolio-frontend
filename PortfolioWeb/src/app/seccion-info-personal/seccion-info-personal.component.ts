import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-seccion-info-personal',
  templateUrl: './seccion-info-personal.component.html',
  styleUrls: ['./seccion-info-personal.component.css']
})
export class SeccionInfoPersonalComponent implements OnInit{

miPortfolio:any;
editando:boolean=false;  
agregando:boolean=false;

constructor (private datosPortfolio:PortfolioService){
}
  
ngOnInit(): void {
  this.datosPortfolio.obtenerInfoPersonal().subscribe(data => {
  this.miPortfolio = data[0];});
  this.editando=this.datosPortfolio.editando;
}

habilitarIngreso(){
  this.agregando=true;
}

cambiarInfoPersonal(){
  const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
  const apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
  const profesion = (<HTMLInputElement>document.getElementById("profesion")).value;
  const descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value; 
  const id = this.miPortfolio.id;

  const infopersonal = {id:id, nombre: nombre, apellido: apellido, profesion: profesion, descripcion: descripcion, urlFotoDePerfil: null, urlBanner: null, urlInstagram:null, correo:null};
  this.datosPortfolio.editarInformacionPersonal(infopersonal).subscribe(
    () => {
      this.datosPortfolio.obtenerInfoPersonal().subscribe(data => {
      this.miPortfolio = data[0];
      });
      this.agregando = false;
    },
    error => console.error(error)
  );
}

}
