import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

miPortfolio:any;  
logged:boolean=false;
constructor (private datosPortfolio:PortfolioService, private loginService:LoginService){

};

ngOnInit(): void {
    this.datosPortfolio.obtenerInfoPersonal().subscribe(data => {
    this.miPortfolio = data[0];});
    this.logged=this.datosPortfolio.editando;
}

onLogout(){
  this.logged=false;
  this.loginService.logout();
  location.reload();
}

onLogin(){
  this.loginService.irAlLogin();
}

}
