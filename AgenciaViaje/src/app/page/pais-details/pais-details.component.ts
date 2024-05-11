import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Destinos, Hotele } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';
import { CurrencyPipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-pais-details',
  standalone: true,
  imports: [FooterComponent, RouterLink, CurrencyPipe,SlicePipe],
  templateUrl: './pais-details.component.html',
  styleUrl: './pais-details.component.css'
})
export class PaisDetailsComponent {
  bDestinos: Destinos = { continentes: [] };
  bDestinos2: Destinos = { continentes: [] };
  origen: string = '';
  destino: string = '';
  fechaIda: string = '';
  fechaVuelta: string = '';
  numPasajeros: number = 0;
   


  constructor(private servicio: DestinosService, private router: Router, private activaRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDestino();
    this.navegar();
  }
  busquedaValida=this.servicio.busquedaValida;

  
  loadDestino() {
    const parametro = this.activaRouter.snapshot.params['parametro'];

    this.servicio.getDestino(parametro).subscribe({
      next: (result) => {
        const destino = result.destino;
        const nombreContinente = result.nombreContinente;

        if (destino) {
          this.bDestinos = {
            continentes: [{
              destinos: [destino],
              nombre: nombreContinente || '',
              descripcion: '',
              titulo: '',
              slogan: '',
              imagenes_destacadas: []
            }]
          };
          if (nombreContinente) {
            this.loadDestinosPorContinente(nombreContinente);
          } else {
            console.error('El nombre del continente no se encontró.'); 
          }
        } else {
          console.error('El destino no se encontró.');
          this.router.navigate(['/error-404']);
        }
      },
      error: (err) => {
        console.error('Error al cargar el destino:', err);
      }
    });
  }

  loadDestinosPorContinente(continente: string) {
    this.servicio.getDestinosPorContinente(continente).subscribe({
      next: (destinosPorContinente) => {
        if (destinosPorContinente.continentes.length > 0) {
          this.bDestinos2 = destinosPorContinente;
        } else {
          console.error('No se encontraron destinos para el continente.');
        }
      },
      error: (err) => {
        console.error('Error al cargar los destinos por continente:', err);
      }
    });
  }

  navegar() {
    this.activaRouter.queryParams.subscribe(params => {
      this.origen = params['origen'];
      this.destino = params['destino'];
      this.fechaIda = params['fechaIda'];
      this.fechaVuelta = params['fechaVuelta'];
      this.numPasajeros = +params['numPasajeros'];
    });
  }

}


 

  

  
  
  

