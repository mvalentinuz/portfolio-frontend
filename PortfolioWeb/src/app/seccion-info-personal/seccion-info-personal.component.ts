import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-seccion-info-personal',
  templateUrl: './seccion-info-personal.component.html',
  styleUrls: ['./seccion-info-personal.component.css']
})
export class SeccionInfoPersonalComponent implements OnInit{

miPortfolio:any;  
constructor (private datosPortfolio:PortfolioService){
}
  
ngOnInit(): void {
  this.datosPortfolio.obtenerInfoPersonal().subscribe(data => {
  this.miPortfolio = data[0];});
}

}
