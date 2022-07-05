import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsTramiteService {

  constructor( private http: HttpClient) { }


obtenerInformacionCards(){

  return this.http.get<any>(environment.endpoints.auth + "/cardEntidades")
  .pipe(map((res:any)=>{
    return res;
   
  }))
}
}
