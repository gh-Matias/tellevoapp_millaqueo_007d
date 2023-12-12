import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User,Users } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient:HttpClient) { }
  
  CrearUsuario(newUsuario: Users): Observable<Users>{
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
  

}
