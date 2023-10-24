import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  usuario: string | null;

  constructor() {
    this.usuario = sessionStorage.getItem('username');
   }

  ngOnInit() {
  }

}
