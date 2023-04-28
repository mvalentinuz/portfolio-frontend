import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PortfolioService } from './portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private ruta:Router, private datosPortfolio:PortfolioService) { }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    const options = { params: new HttpParams().set('username', username).set('password', password) };
    return this.http.post('http://localhost:8080/iniciar-sesion', loginData, options);
  }

  logout(){
    //this.ruta.navigate(['/iniciar-sesion']);
    this.datosPortfolio.toggleEdition(false);
    this.ruta.navigate(['/portfolio']);
  }

  isLogged(check:boolean){
    this.datosPortfolio.toggleEdition(check);
  }

  irAlLogin(){
    this.ruta.navigate(['/iniciar-sesion']);
  }
}
