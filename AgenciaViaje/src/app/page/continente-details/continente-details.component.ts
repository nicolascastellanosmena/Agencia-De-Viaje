import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Destinos } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { FooterComponent } from '../../component/footer/footer.component';


@Component({
  selector: 'app-continente-details',
  standalone: true,
  imports: [RouterLink,SlicePipe,CurrencyPipe,FooterComponent],
  templateUrl: './continente-details.component.html',
  styleUrl: './continente-details.component.css'
})
export class ContinenteDetailsComponent implements OnInit {
  
  bDestinos: Destinos = { continentes: [] };

  constructor(private route: ActivatedRoute, private servicio: DestinosService,private router:Router) { }
  
  ngOnInit(): void {
    this.load();
    this.ordenarPorPuntuacion()
  }
  
  load(): void {
    this.route.params.subscribe(params => {
      const continenteId = params['continenteId'];
      this.servicio.getDestinos().subscribe({
        next: (destinos) => {
         
          const continenteEncontrado = destinos.continentes.find(cont => cont.nombre === continenteId);
          if (continenteEncontrado) {
            
            this.bDestinos.continentes = [continenteEncontrado]; 
          } else {
            console.error('Continente no encontrado');
            this.router.navigate(['/error-404']);
          }
        },
        error: (error) => {
          console.error('Error al cargar los destinos:', error);
        },
        complete: () => {
          
        }
      });
    });
  }

  ordenarPorPuntuacion() {
    this.bDestinos.continentes.forEach((continente) => {
      
        continente.destinos.sort((a, b) => b.calificacion - a.calificacion);

       
        continente.destinos.forEach((destino) => {
            destino.hoteles.sort((a, b) => b.calificacion - a.calificacion);
        });
    });
}

navegarADestino() {
  this.servicio.busquedaValida = false;
}
}

  


