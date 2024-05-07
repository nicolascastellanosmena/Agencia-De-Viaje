import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Destinos } from '../../common/destinos';
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
  isSelectShown: boolean = false;
  selectedDestino: string = '';

  constructor(private servicio: DestinosService, private router: Router, private activaRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.servicio.getDestinos().subscribe({
      next: (destino) => {
        this.bDestinos = destino;
      },
      error: (error) => {
        console.error('Error al cargar los destinos:', error);
      },
      complete: () => {
        console.log('La carga de destinos se ha completado');
      }
    });
  }

  desplegarDestino() {
    const destinoInput = this.destinoInput.nativeElement;
    if (destinoInput) {
      const options = this.bDestinos.continentes.flatMap(cont => cont.destinos.map(dest => `<option value="${dest.nombre}">${dest.nombre}</option>`)).join('');
      destinoInput.outerHTML = `<select aria-label="Destino" class="form-control" onclick="this.isSelectShown = true; revertirDestino()">
                                  <option value="">Selecciona destino</option>
                                  ${options}
                                </select>`;
      this.isSelectShown = true;
    }
  }

  buscarDestino() {
    if (this.selectedDestino) {
      this.servicio.buscarContinentePorDestino(this.selectedDestino).subscribe(continente => {
        if (continente) {
          this.cambiarDestino(continente, this.selectedDestino);
        } else {
          console.error('El destino seleccionado no se encontró.');
        }
      });
    } else {
      console.error('No se ha seleccionado ningún destino.');
    }
  }

  capturarDestino(event: any) {
    this.selectedDestino = event.target.value;
  }

  cambiarDestino(continente: string, destino: string) {
    this.router.navigate([`/catalogo/${continente}/${destino}`]);
  }

}

  

  


