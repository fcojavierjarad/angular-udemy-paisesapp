import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { PaisTablaComponent } from '../components/pais-tabla/pais-tabla.component';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiUrl:string="https://restcountries.com/v2";
  
constructor(private http:HttpClient) { }

buscarPais(termino:string):Observable<Country[]>{
  const url=`${this.apiUrl}/name/${termino}`; 
  return this.http.get<Country[]>(url);
}

buscarCapital(termino:string):Observable<Country[]>{
  const url=`${this.apiUrl}/capital/${termino}`; 
  return this.http.get<Country[]>(url);
}

getPaisPorAlpha(id:string):Observable<Country>{
  const url=`${this.apiUrl}/alpha/${id}`; 
  return this.http.get<Country>(url);
}

buscarRegion(region:string):Observable<Country[]>{

  //agrega parametro
  const params= new HttpParams()
  .set('fields','name,capital,alpha2Code,flag,population');
  
  const url=`${this.apiUrl}/regionalbloc/${region}`; 
  //params un¡a vez ya que se llama igual la variable
  return this.http.get<Country[]>(url,{params})
  .pipe(tap(console.log))
}

}
