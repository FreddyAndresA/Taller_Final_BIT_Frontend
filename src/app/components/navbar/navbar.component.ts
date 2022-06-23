import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  user:any
  username:any
  entrega:any


  constructor() {}

  ngOnInit(): void {
    this.entrega = localStorage.getItem('currentUser');
    this.user = JSON.parse(this.entrega)
    this.username = this.user.nombre
  }

}
