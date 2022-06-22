import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i


  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  entrega: any
  users: any[] = []

  signIn() {
    const LOGIN = {
      email: this.signInForm.get('email')?.value,
      password: this.signInForm.get('password')?.value,
      genero: ''
    }

    // Validando el usuario
    if (localStorage.getItem === null) {
      Swal.fire({
        title: `Por favor registrate para iniciar sesión.`,
        icon: 'warning',
      })
    } else if (localStorage.getItem != null) {
      this.entrega = localStorage.getItem('users')
      this.users = JSON.parse(this.entrega)

      let emailValidation = false;
      let passwordValidation = false;

      for (const user of this.users) {
        if (user.email === LOGIN.email) {
          emailValidation = true
          LOGIN.genero = user.genero
        }
        if (user.password === LOGIN.password) {
          passwordValidation = true
        }
      }




      if (!emailValidation || !passwordValidation) {
        let timerInterval: any
        Swal.fire({
          title: 'Lo sentimos. Usuario incorrecto !',
          text: 'Por favor verifica tus credenciales para iniciar sesion',
          icon: 'error',
          timer: 4000,
          /* timerProgressBar: true, */
          willClose: () => {
            clearInterval(timerInterval)
            return
          }
        })
      } else if (emailValidation && passwordValidation) {
        localStorage.setItem("currentUser", JSON.stringify(LOGIN))
        let timerInterval: any
        Swal.fire({
          title: 'Hola de nuevo !',
          text: 'Encuentra y disfruta de tus películas fácilmente...',
          icon: 'success',
          timer: 4000,
          /* timerProgressBar: true, */
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
          .then((result) => {
            //Pendiente direccionar el router
            this.router.navigate(['/'])
          })
      }


    }
  }


}
