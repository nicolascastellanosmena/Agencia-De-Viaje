import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descuento } from '../common/descuento';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {
   urlJson="./assets/apis/descuento.json"

  constructor(private http:HttpClient) { }
  obtenerDescuento(): Observable<Descuento> {
    return this.http.get<Descuento>(this.urlJson);
  }
}

