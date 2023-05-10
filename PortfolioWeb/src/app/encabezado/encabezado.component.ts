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
agregando:boolean=false;
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

habilitarIngreso(){
  this.agregando=true;
}

cambiarInformacionEncabezado(){
  const urlFotoDePerfil = (<HTMLInputElement>document.getElementById("urlFotoDePerfil")).value;
  const urlBanner = (<HTMLInputElement>document.getElementById("urlBanner")).value;
  const urlInstagram = (<HTMLInputElement>document.getElementById("linkIG")).value;
  const correo = (<HTMLInputElement>document.getElementById("correo")).value; 
  const id = this.miPortfolio.id;

  const infopersonal = {id:id, nombre: null, apellido: null, profesion: null, descripcion: null, urlFotoDePerfil: urlFotoDePerfil, urlBanner: urlBanner, urlInstagram:urlInstagram, correo:correo};
  this.datosPortfolio.editarInformacionPersonal(infopersonal).subscribe(
    () => {
      this.datosPortfolio.obtenerInfoPersonal().subscribe(data => {
      this.miPortfolio = data[0];
      });
      this.agregando = false;
    },
    error => console.error(error)
  );
};

}
