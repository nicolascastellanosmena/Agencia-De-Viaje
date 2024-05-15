import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Destinos, Hotele } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  NgModel,
} from '@angular/forms';
import { DescuentoService } from '../../services/descuento.service';
import { Descuento, PromocionesVuelo } from '../../common/descuento';
@Component({
  selector: 'app-pais-details',
  standalone: true,
  imports: [FooterComponent, RouterLink, CurrencyPipe, SlicePipe, FormsModule],
  templateUrl: './pais-details.component.html',
  styleUrl: './pais-details.component.css',
})
export class PaisDetailsComponent {
  @ViewChild('hotelSeleccionado') hotelSeleccionado: ElementRef | undefined;
  bDestinos: Destinos = { continentes: [] };
  bDestinos2: Destinos = { continentes: [] };
  hotelesSeleccionados: Hotele[] = [];
  origen: string = '';
  destino: string = '';
  fechaIda: string = '';
  fechaVuelta: string = '';
  numPasajeros: number = 1;
  precioTotal: number = 0;
  descuentoAplicado: number = 0;
  hotelAyanido: boolean = false;
  codigoDescuento: string = '';
  precioConDescuento: number = 0;
  descuentos: Descuento[] = [];

  constructor(
    private servicio: DestinosService,
    private router: Router,
    private activaRouter: ActivatedRoute,
    private descuentoService: DescuentoService
  ) {}

  ngOnInit(): void {
    this.loadDestino();
    this.navegar();
  }
  busquedaValida = this.servicio.busquedaValida;

  loadDestino() {
    const parametro = this.activaRouter.snapshot.params['parametro'];

    this.servicio.getDestino(parametro).subscribe({
      next: (result) => {
        const destino = result.destino;
        const nombreContinente = result.nombreContinente;

        if (destino) {
          this.bDestinos = {
            continentes: [
              {
                destinos: [destino],
                nombre: nombreContinente || '',
                descripcion: '',
                titulo: '',
                slogan: '',
                imagenes_destacadas: [],
              },
            ],
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
      },
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
      },
    });
  }

  navegar() {
    this.activaRouter.queryParams.subscribe((params) => {
      this.origen = params['origen'];
      this.destino = params['destino'];
      this.fechaIda = params['fechaIda'];
      this.fechaVuelta = params['fechaVuelta'];
      this.numPasajeros = +params['numPasajeros'];
    });
  }

  agregarHotel(hotel: Hotele) {
     this.hotelesSeleccionados = [hotel];
     this.hotelAyanido = true;
 }

  scrollToSection() {
    const element = document.querySelector('#hotelSeleccionado');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  agregarHotelYScroll(hotel: Hotele) {
    this.scrollToSection();
     this.agregarHotel(hotel);
  }

   eliminarHotel(hotel: Hotele): void {
    const index = this.hotelesSeleccionados.indexOf(hotel);
     if (index !== -1) {
       this.hotelesSeleccionados.splice(index, 1);
     }
     this.hotelAyanido = false;
   }

  calcularPrecioVuelo(): number {
    let precio1 = 0;
    for (const conten of this.bDestinos.continentes) {
      for (const destino of conten.destinos) {
        precio1 = destino.precio * this.numPasajeros;
      }
    }
    return precio1;
  }
  calcularPrecioHotel(): number {
    let precio2 = 0;
    for (const conten of this.hotelesSeleccionados) {
      precio2 = conten.precio_maximo * 2;
    }
    return precio2;
  }

  calcularPrecioTotal(): number {
    let precioVuelo = this.calcularPrecioVuelo();
    let precioHotel = this.hotelAyanido ? this.calcularPrecioHotel() : 0;
    let precioTotalSinDescuento = precioVuelo + precioHotel;
  
    if (this.codigoDescuento) {
      this.descuentoService.obtenerDescuento().subscribe((descuento) => {
        this.descuentoAplicado = 0;
  
        switch (this.codigoDescuento) {
          case 'VUELA10':
            this.descuentoAplicado = descuento.promociones_vuelos[0].descuento / 100;
            break;
          case 'DESTINO20':
            this.descuentoAplicado = descuento.promociones_vuelos[1].descuento / 100;
            break;
          case 'VERANO25':
            this.descuentoAplicado = descuento.promociones_vuelos[2].descuento / 100;
            break;
          case 'NEGOCIOS30':
            this.descuentoAplicado = descuento.promociones_vuelos[3].descuento / 100;
            break;
          default:
            console.log('Código de descuento no válido');
            break;
        }
  
        this.precioTotal = precioTotalSinDescuento - (precioTotalSinDescuento * this.descuentoAplicado);
      });
    } else {
      this.precioTotal = precioTotalSinDescuento;
    }
  
    return this.precioTotal;
  }
  
  reservar() {
    this.calcularPrecioTotal(); 
    const datosReserva = {
      origen: this.origen,
      destino: this.destino,
      fechaIda: this.fechaIda,
      fechaVuelta: this.fechaVuelta,
      numPasajeros: this.numPasajeros,
      hotelSeleccionado: this.hotelesSeleccionados.length > 0 ? this.hotelesSeleccionados[0] : null,
      bdestino: this.bDestinos,
      bDestinos2: this.bDestinos2,
      precioTotal: this.precioTotal,
      codigoDescuento: this.codigoDescuento,
      descuentoAplicado: this.descuentoAplicado,
      descuento: this.descuentos,
    };
    this.servicio.enviarReserva(datosReserva);
    this.router.navigate(['/reservas']);
  }
  
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
