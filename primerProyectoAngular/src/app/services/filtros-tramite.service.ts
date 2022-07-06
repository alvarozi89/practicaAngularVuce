import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltrosTramiteService {

  constructor(
    private http: HttpClient

  ) {
   }
  obtenerFiltros(){
    return this.http.get<any>(environment.endpoints.auth)
    .pipe(map((res:any)=>{

      return res;

    }))
  }



}
