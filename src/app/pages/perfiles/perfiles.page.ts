import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {
  usuarios ={
    id:0,
    nombre:"",
    email:"",

  }

  constructor(private apiCrud: ApicrudService,
    private authservice:AuthService,
    private alertcontroller:AlertController,
    private router: Router) { }

    
  
    ngOnInit() {
    }
  
    getIdFromUrl(){
      let url=this.router.url;
      let arr=url.split("/",3);
      let id = parseInt(arr[2]);
      return id;
    }
  
    getUserById(usuariosID:number){
      this.authservice.BuscarUsuarioId(usuariosID).subscribe(
        (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
          this.usuarios={
            id: resp[0].id,
            nombre: resp[0].nombre,
            email: resp[0].email,
            
          }
        }
      )
    }
  
    updateUsuarios(){
        this.authservice.ActualizarUsuario(this.usuarios).subscribe();
        this.router.navigateByUrl("/inicio");
        this.mostrarMensaje();
    }
    async mostrarMensaje(){
      const alerta= await this.alertcontroller.create({ 
        header:'Usuario creado',
        message: 'Gracias! Se ha modificado correctamente',
        buttons: ['Ok']
      });
    
      await alerta.present();
    }

  
  }

