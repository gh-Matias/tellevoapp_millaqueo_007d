import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  //devuelve todos los objetos de tipo users almacenados en data
  GetAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  //obtenemos un observable de acuerdo al username ingresado en login
  GetUserById(codigo:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }

  CrearUsuario(newUsuario: User): Observable<User>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

}
