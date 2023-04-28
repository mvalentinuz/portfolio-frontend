import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-seccion-proyectos',
  templateUrl: './seccion-proyectos.component.html',
  styleUrls: ['./seccion-proyectos.component.css']
})
export class SeccionProyectosComponent implements OnInit{

  proyectosList:any;  
  agregando:boolean=false;
  editando:boolean=false;
constructor (private datosPortfolio:PortfolioService){};

ngOnInit(): void {
  this.datosPortfolio.obtenerProyectos().subscribe(data => {
  this.proyectosList = data;});
  this.editando=this.datosPortfolio.editando;
}

habilitarIngreso(){
  this.agregando=true;
}

agregarProyecto(){
  const nombreProyecto = (<HTMLInputElement>document.getElementById("nombreProyecto")).value;
  const descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
  const link = (<HTMLInputElement>document.getElementById("link")).value;

  const proyecto = {nombre: nombreProyecto, descripcion: descripcion, linkVisualizacion: link};
  this.datosPortfolio.agregarProyecto(proyecto).subscribe(
    () => {
      this.datosPortfolio.obtenerProyectos().subscribe(data => {
        this.proyectosList = data;
      });
      this.agregando = false;
    },
    error => console.error(error)
  );
}

borrar(id:any){
  this.datosPortfolio.borrarProyecto(id);
  this.datosPortfolio.obtenerProyectos().subscribe(data => {
    this.proyectosList = data;
  });
}

}
