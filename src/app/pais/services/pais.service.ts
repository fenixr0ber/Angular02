import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2/"


  constructor( private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(capital:string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string): Observable<Country>{
    
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion (region:string): Observable<Country[]>{
    
    const params = new HttpParams()
    .set('fields', '/name,capital,alpha2Code,population,flag');

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params})
    .pipe(
      tap(console.log)
    )
  }

}
