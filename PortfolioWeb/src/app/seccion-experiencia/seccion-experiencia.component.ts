import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-seccion-experiencia',
  templateUrl: './seccion-experiencia.component.html',
  styleUrls: ['./seccion-experiencia.component.css']
})
export class SeccionExperienciaComponent implements OnInit{
  experienciasList:any;
  agregando:boolean=false;
  editando:boolean=false;
constructor (private datosPortfolio:PortfolioService){};

ngOnInit(): void {
  this.datosPortfolio.obtenerExperiencias().subscribe(data => {
  this.experienciasList = data;});
  this.editando=this.datosPortfolio.editando;
}

habilitarIngreso(){
  this.agregando=true;
}

agregarExperiencia(){
  const urlLogo = (<HTMLInputElement>document.getElementById("srcLogo")).value;
  const nombre = (<HTMLInputElement>document.getElementById("titulo")).value;
  const fechaInicio = (<HTMLInputElement>document.getElementById("fechaInicio")).value;
  const fechaFin = (<HTMLInputElement>document.getElementById("fechaFin")).value;
  const descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;

  const experiencia = {urlLogo: urlLogo, nombre: nombre, fechaInicio: fechaInicio, fechaFin: fechaFin, descripcion: descripcion};
  this.datosPortfolio.agregarExperiencia(experiencia).subscribe(
    () => {
      this.datosPortfolio.obtenerExperiencias().subscribe(data => {
        this.experienciasList = data;
      });
      this.agregando = false;
    },
    error => console.error(error)
  );
}

borrar(id:any){
  this.datosPortfolio.borrarExperiencia(id);
  this.datosPortfolio.obtenerExperiencias().subscribe(data => {
    this.experienciasList = data;
  });
}


}
