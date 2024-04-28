import { Component, OnInit } from '@angular/core';
import { Destinos } from '../../../common/destinos';
import { DestinosService } from '../../../services/destinos.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './europa.component.html',
  styleUrl: './europa.component.css'
})
export class EuropaComponent implements OnInit {

  bDestinos:Destinos={continentes:[]};

  constructor(private servicio:DestinosService){}

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.servicio.getDestinos().subscribe(
      {
        next: (destino) => {
          this.bDestinos = destino;
          console.log(destino);
           
        },
        error: (error) => {
          console.error('Error al cargar los destinos:', error);
         
        },
        complete: () => {
          console.log('La carga de destinos se ha completado');
         
        }
      }
    )
  }

}
