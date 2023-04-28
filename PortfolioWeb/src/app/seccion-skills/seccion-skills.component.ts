import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-seccion-skills',
  templateUrl: './seccion-skills.component.html',
  styleUrls: ['./seccion-skills.component.css']
})
export class SeccionSkillsComponent implements OnInit{
  skillsList:any; 
  agregando:boolean=false;
  editando:boolean=false;
constructor (private datosPortfolio:PortfolioService){};

ngOnInit(): void {
  this.datosPortfolio.obtenerSkills().subscribe(data => {
  this.skillsList = data;});
  this.editando=this.datosPortfolio.editando;
}

habilitarIngreso(){
  this.agregando=true;
}

agregarSkill(){
  const nombre = (<HTMLInputElement>document.getElementById("nombreSkill")).value;
  const porcentajeDominio = (<HTMLInputElement>document.getElementById("porcentaje")).value;

  const skill = {nombre: nombre, porcentajeDominio: porcentajeDominio};
  this.datosPortfolio.agregarSkill(skill).subscribe(
    () => {
      this.datosPortfolio.obtenerSkills().subscribe(data => {
        this.skillsList = data;
      });
      this.agregando = false;
    },
    error => console.error(error)
  );
}

borrar(id:any){
  this.datosPortfolio.borrarSkill(id);
  this.datosPortfolio.obtenerSkills().subscribe(data => {
    this.skillsList = data;
  });
}

}
