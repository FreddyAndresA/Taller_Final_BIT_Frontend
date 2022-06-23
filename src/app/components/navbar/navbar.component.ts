import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  entrega:any
  user:any
  username:any


  constructor(private router: Router) {}

  cerrarSesion() {
    this.router.navigate(['/'])
    localStorage.removeItem('currentUser')
  }

  ngOnInit(): void {
    this.entrega = localStorage.getItem('currentUser');
    this.user = JSON.parse(this.entrega)
    this.username = this.user.nombre
  }

}
