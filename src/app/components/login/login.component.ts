import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
 loading: boolean = false;
  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Ingresar(){
    const usuario = this.form.value.usuario,
     password = this.form.value.password;

     if(usuario =="administrador" && password == "123456"){
      this.loading = true;
        setTimeout(() => {
          this.router.navigate(['administrador'])
        }, 1500);
     }else if(usuario =="cliente" && password == "123456"){
      this.loading = true;
        setTimeout(() => {
          this.router.navigate(['cliente'])
        }, 1500);
    }else{
       this.error();
       this.form.reset();
     }
    }

     error(){
       this._snackbar.open('Usuario o contaseña incorrecto', '', {
         duration:5000,
         horizontalPosition: 'center',
         verticalPosition: 'bottom'
       })
      }
}
