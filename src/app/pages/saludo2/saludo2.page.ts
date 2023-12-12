import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo2',
  templateUrl: './saludo2.page.html',
  styleUrls: ['./saludo2.page.scss'],
})
export class Saludo2Page implements OnInit {
  usuario: string | null;

  constructor() {
    this.usuario = sessionStorage.getItem('username');
   }

  ngOnInit() {
  }

}
