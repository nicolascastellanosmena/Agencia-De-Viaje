import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Destino, Destinos } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink, SlicePipe,CurrencyPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('destinoInput') destinoInput!: ElementRef;
  
  bDestinos: Destinos = { continentes: [] };
  destinosActuales: Destino[] = [];
  selectedDestino: string = '';
  selectedOrigen: string = '';
  selecteOrigenPais:string='';
  fechaIda: string='';
  fechaVuelta: string='';
  numPasajeros: number=0;
  busquedaValida:boolean=false;
 
  
  constructor(private servicio: DestinosService, private router: Router, private activaRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.load();
  }
  
  load() {
    this.servicio.getDestinos().subscribe({
      next: (destinos) => {
        this.bDestinos = destinos;
      },
      error: (error) => {
        console.error('Error al cargar los destinos:', error);
      },
      complete: () => {
      }
    });
  }
  
  cambiarOrigen(origen: string | undefined) {
    if (origen) {
      this.selectedOrigen = origen;
    } else {
      console.log('Origen no encontrado')
    }
  }
  
  actualizarDestinos() {
    if (this.selectedOrigen) {
      const continente = this.bDestinos.continentes.find(cont => cont.nombre === this.selectedOrigen);
      if (continente) {
        this.destinosActuales = continente.destinos;
      } else {
        this.destinosActuales = [];
      }
    } else {
      this.destinosActuales = [];
    }
  }

  
  cambiarDestino(destino: string) {
    if (this.selectedOrigen && destino) {
      const continente = this.bDestinos.continentes.find(cont => cont.nombre === this.selectedOrigen);
      if (continente) {
        const destinoSeleccionado = continente.destinos.find(dest => dest.nombre === destino);
        if (destinoSeleccionado) {
          this.router.navigate([`/catalogo/${this.selectedOrigen}/${destino}`]);
        } else {
          console.error('El destino seleccionado no se encontró.');
        }
      } else {
        console.error('El continente del origen seleccionado no se encontró.');
      }
    } else {
      console.error('No se ha seleccionado origen o destino.');
    }
  }
  navegarADestino() {
    if (this.selectedOrigen && this.selectedDestino && this.fechaIda && this.fechaVuelta && this.numPasajeros ) {
      this.servicio.busquedaValida = true;
      this.router.navigate([`/catalogo/${this.selectedOrigen}/${this.selectedDestino}`], {
        queryParams: {
          origen:this.selectedOrigen,
          destino:this.selectedDestino,
          fechaIda: this.fechaIda,
          fechaVuelta: this.fechaVuelta,
          numPasajeros: this.numPasajeros
        }
      });
    } else {
      console.error('No se ha seleccionado origen o destino.');
      this.servicio.busquedaValida=false;
    }
  }
}

  
  




  

  


