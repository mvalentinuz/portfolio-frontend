import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  editando:boolean=false;

  constructor(private http:HttpClient) { }

  obtenerInfoPersonal():Observable<any>{
    return this.http.get('http://localhost:8080/ver/infopersonales');
  }

  obtenerExperiencias():Observable<any>{
    return this.http.get('http://localhost:8080/ver/experiencias');
  }

  obtenerEducaciones():Observable<any>{
    return this.http.get('http://localhost:8080/ver/educaciones');
  }

  obtenerSkills():Observable<any>{
    return this.http.get('http://localhost:8080/ver/skills');
  }

  obtenerProyectos():Observable<any>{
    return this.http.get('http://localhost:8080/ver/proyectos');
  }

  agregarEducacion(educacion: any): Observable<any> {
    return this.http.post('http://localhost:8080/new/educacion', educacion);
  }

  agregarExperiencia(experiencia: any): Observable<any> {
    return this.http.post('http://localhost:8080/new/experiencia', experiencia);
  }

  agregarSkill(skill: any): Observable<any> {
    return this.http.post('http://localhost:8080/new/skill', skill);
  }

  agregarProyecto(proyecto: any): Observable<any> {
    return this.http.post('http://localhost:8080/new/proyecto', proyecto);
  }

  borrarEducacion(id:any){
    return this.http.delete(`http://localhost:8080/delete/educacion/${id}`)
    .subscribe(
      () => console.log(`La educacion con ID ${id} se ha borrado exitosamente`),
      error => console.error(error)
    );
  }

  borrarExperiencia(id:any){
    return this.http.delete(`http://localhost:8080/delete/experiencia/${id}`)
    .subscribe(
      () => console.log(`La experiencia con ID ${id} se ha borrado exitosamente`),
      error => console.error(error)
    );
  }

  borrarProyecto(id:any){
    return this.http.delete(`http://localhost:8080/delete/proyecto/${id}`)
    .subscribe(
      () => console.log(`El proyecto con ID ${id} se ha borrado exitosamente`),
      error => console.error(error)
    );
  }
  borrarSkill(id:any){
    return this.http.delete(`http://localhost:8080/delete/skill/${id}`)
    .subscribe(
      () => console.log(`La skill con ID ${id} se ha borrado exitosamente`),
      error => console.error(error)
    );
  }

  toggleEdition(check:boolean){
    this.editando=check;
  }

}
