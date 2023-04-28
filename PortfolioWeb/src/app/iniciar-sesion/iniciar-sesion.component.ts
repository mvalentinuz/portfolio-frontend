import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{

  public submitted = false;

  constructor(private formBuilder:FormBuilder, private ruta:Router, private loginService:LoginService){  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onEnviar() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

  this.loginService.login(this.loginForm.value.username ?? '', this.loginForm.value.password ?? '').subscribe(
    response => {
        this.ruta.navigate(['/portfolio']);
        console.log("Inicio de sesión exitoso");
        this.loginService.isLogged(true);
      },
      error => {
        console.log("Inicio de sesión fallido");
        this.loginForm.setErrors({ 'invalidLogin': true });
        this.submitted = true;
      }
    );

}

}
