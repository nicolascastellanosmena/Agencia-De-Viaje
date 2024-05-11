import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Destino, Destinos } from '../common/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  urlJson='./assets/apis/destinos.json'
  private _busquedaValida: boolean = false;


  constructor(private http:HttpClient) { }

  public getDestinos():Observable<Destinos>{
     return this.http.get<Destinos>(this.urlJson)
  }

  public getDestino(nombre: string): Observable<{ destino: Destino | undefined, nombreContinente: string | undefined }> {
    return this.http.get<Destinos>(this.urlJson).pipe(
      map(destinos => {
        for (const continente of destinos.continentes) {
          for (const destino of continente.destinos) {
            if (destino.nombre === nombre) {
              return { destino, nombreContinente: continente.nombre };
            }
          }
        }
        return { destino: undefined, nombreContinente: undefined };
      })
    );
  }
  
  
  public buscarContinentePorDestino(destino: string): Observable<string | null> {
    return this.http.get<Destinos>(this.urlJson).pipe(
      map(destinos => {
        for (const continente of destinos.continentes) {
          for (const destinoItem of continente.destinos) {
            if (destinoItem.nombre === destino) {
              return continente.nombre;
            }
          }
        }
        return null;
      })
    );
  }
  set busquedaValida(value: boolean) {
    this._busquedaValida = value;
  }
  get busquedaValida(): boolean {
    return this._busquedaValida;
  }
  public getDestinosPorContinente(continente: string): Observable<Destinos> {
    return this.http.get<Destinos>(this.urlJson).pipe(
      map(destinos => ({
        continentes: destinos.continentes.filter(cont => cont.nombre === continente)
      }))
    );
  }

  


}
