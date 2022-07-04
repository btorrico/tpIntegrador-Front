import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  logo = '/assets/img/logo.png';


  constructor(private router: Router,private fb:FormBuilder,private _snackBar: MatSnackBar) {
    this.form = this.fb.group(
      {
        usuario: ['',Validators.required],
        password: ['',Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form);


    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
//Vista Administrador
    if(usuario == "luisH" && password == "123"){

       this.router.navigateByUrl('/dashboard');
    }
    // Redirecciona panel vendedores
      else if(usuario == "lauraS" && password == "1234"){
        this.router.navigateByUrl('/vista-vendedor');
       }
    else if(usuario == "mariaT" && password == "12345"){
       this.router.navigateByUrl('/vista-clientes');
       //Redireccionamos pantalla de compra
  }else{
    this.error();
    this.form.reset();
  }


  }

  error(){
    this._snackBar.open("El usuario o contraseña ingresados son incorrectos", '',{
    duration:500,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
     })
    };

  }
