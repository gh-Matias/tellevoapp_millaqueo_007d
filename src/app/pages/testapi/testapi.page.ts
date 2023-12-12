import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.page.html',
  styleUrls: ['./testapi.page.scss'],
})
export class TestapiPage implements OnInit {
  usuario: string | null;

  constructor() {
    this.usuario = sessionStorage.getItem('username');
   }

  ngOnInit() {
  }

}