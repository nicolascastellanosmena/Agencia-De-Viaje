import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';
import { Destinos } from '../common/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  constructor(private http:HttpClient) { }

  public getDestinos():Observable<Destinos>{
     return this.http.get<Destinos>('./assets/apis/destinos.json')
  }
}
