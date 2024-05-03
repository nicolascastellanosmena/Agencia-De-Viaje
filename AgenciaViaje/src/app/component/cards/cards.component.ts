import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Destino, Destinos } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
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
