import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterLink } from '@angular/router';
import { Destinos } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink, SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

  buscadorOferta(pais:string): string{
      return pais;
  }
}
