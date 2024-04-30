import { Component, OnInit } from '@angular/core';
import { Destinos } from '../../../common/destinos';
import { DestinosService } from '../../../services/destinos.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { FooterComponent } from '../../../component/footer/footer.component';

@Component({
  selector: 'app-america',
  standalone: true,
  imports: [RouterLink,SlicePipe,CurrencyPipe,FooterComponent],
  templateUrl: './america.component.html',
  styleUrl: './america.component.css'
})
export class AmericaComponent implements OnInit {
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

       
        continente.destinos.forEach((destino) => {
            destino.hoteles.sort((a, b) => b.calificacion - a.calificacion);
        });
    });
}


}
