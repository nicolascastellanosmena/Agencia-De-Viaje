import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable, map } from 'rxjs';
import { Destino, Destinos } from '../common/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  urlJson='./assets/apis/destinos.json'

  constructor(private http:HttpClient) { }

  public getDestinos():Observable<Destinos>{
     return this.http.get<Destinos>(this.urlJson)
  }

  public getDestino(nombre: string): Observable<Destino | undefined> {
    return this.http.get<Destinos>(this.urlJson).pipe(
      map(destinos => {
        for (const continente of destinos.continentes) {
          for (const destino of continente.destinos) {
            if (destino.nombre === nombre) {
              return destino;
            }
          }
        }
        return undefined;
      })
    );
  }
}
