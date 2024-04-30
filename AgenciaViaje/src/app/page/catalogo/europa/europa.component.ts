import { Component, OnInit } from '@angular/core';
import { Destinos } from '../../../common/destinos';
import { DestinosService } from '../../../services/destinos.service';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { FooterComponent } from '../../../component/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [RouterLink,SlicePipe,CurrencyPipe,FooterComponent],
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
          this.ordenarPorPuntuacion();
          ;
           
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

  ordenarPorPuntuacion() {
    this.bDestinos.continentes.forEach((continente) => {
      continente.destinos.sort((a, b) => b.calificacion - a.calificacion);
    }
  )
}

}
