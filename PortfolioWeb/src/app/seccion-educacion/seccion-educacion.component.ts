import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-seccion-educacion',
  templateUrl: './seccion-educacion.component.html',
  styleUrls: ['./seccion-educacion.component.css']
})
export class SeccionEducacionComponent implements OnInit{
  educacionList:any; 
  agregando:boolean=false;
  editando:boolean=false;
constructor (private datosPortfolio:PortfolioService){};

ngOnInit(): void {
  this.datosPortfolio.obtenerEducaciones().subscribe(data => {
  this.educacionList = data;});
  this.editando=this.datosPortfolio.editando;
}

habilitarIngreso(){
  this.agregando=true;
}

agregarEducacion(){
  const urlLogo = (<HTMLInputElement>document.getElementById("srcLogo")).value;
  const nombre = (<HTMLInputElement>document.getElementById("titulo")).value;
  const fechaInicio = (<HTMLInputElement>document.getElementById("fechaInicio")).value;
  const fechaFin = (<HTMLInputElement>document.getElementById("fechaFin")).value;
  const descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;

  const educacion = {urlLogo: urlLogo, nombre: nombre, fechaInicio: fechaInicio, fechaFin: fechaFin, descripcion: descripcion};
  this.datosPortfolio.agregarEducacion(educacion).subscribe(
    () => {
      this.datosPortfolio.obtenerEducaciones().subscribe(data => {
        this.educacionList = data;
      });
      this.agregando = false;
    },
    error => console.error(error)
  );
}

borrar(id:any){
  this.datosPortfolio.borrarEducacion(id);
  this.datosPortfolio.obtenerEducaciones().subscribe(data => {
    this.educacionList = data;
  });
}

}
