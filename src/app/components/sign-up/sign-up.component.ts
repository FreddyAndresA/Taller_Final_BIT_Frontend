import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  signUpForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      password: ['', Validators.required]
    })
  }

  // ----------------------------------------------------------------------------------Funcion para crear el usuario en local storage y enviar a la pagina de inicio

  entrega: any
  users: any[] = []

  signUp() {


    //------- Creando el usuario
    const USER = {
      id: Date.now(),
      nombre: this.signUpForm.get('nombre')?.value,
      genero: this.signUpForm.get('genero')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    }


    // Validando y guardando la info en local storage
    if (localStorage.getItem("users") == null) {
      this.users.push(USER)
      localStorage.setItem("users", JSON.stringify(this.users))
    }
    else if (localStorage.getItem("users") != null) {
      this.entrega = localStorage.getItem('users')
      this.users = JSON.parse(this.entrega)

      for (const user of this.users) {
        if (user.email === USER.email) {
          Swal.fire({
            title: `Tu correo electrónico ya se encuentra registrado.`,
            text: 'Por favor intenta iniciar sesion',
            icon: 'warning',
          })
          return
        } 
      }
      this.users.push(USER)
      localStorage.setItem("users", JSON.stringify(this.users))
    }

    localStorage.setItem("currentUser", JSON.stringify(USER))


    // Enviando la alerta
    let timerInterval: any
    Swal.fire({
      title: `Bienvenido  ${USER.nombre} !`,
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

  ngOnInit(): void {
  }

}
