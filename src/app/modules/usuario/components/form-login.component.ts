import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  public loginForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder, private dialogLoginFormRef: MatDialogRef<FormLoginComponent>){
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  onLogin():void{
    this.usuario.username = this.loginForm.get('username')?.value;
    this.usuario.password = this.loginForm.get('password')?.value;
    if(this.usuario.username === 'sebcon' && this.usuario.password ==='1234'){
      Swal.fire({
        title: "Login",
        text: `Bienvenido a Kalum App ${this.usuario.username}`,
        icon: "success",
        footer: "kalum v1.0.0"
      }).then(Response => {
        if (Response.isConfirmed) {
          this.dialogLoginFormRef.close(1);
        }
      })

    }else {
      Swal.fire({
        title: "Login",
        text: `Credenciales incorrectas, favor de validar de nuevo`,
        icon: "error",
        footer: "kalum v1.0.0"
      });
    }
  }

  onCancel(): void {
    this.dialogLoginFormRef.close(0);
  }
}
