import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterLink } from '@angular/router';
import { Destinos } from '../../common/destinos';
import { DestinosService } from '../../services/destinos.service';
import { CurrencyPipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink, SlicePipe,CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bDestinos: Destinos = { continentes: [] };
  isSelectShown: boolean = false;

  constructor(private servicio: DestinosService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
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
    );
  }

  desplegarOrigen() {
    const origenInput = document.querySelector<HTMLInputElement>('input[aria-label="Origen"]');
    if (origenInput) {
      const options = this.bDestinos.continentes.flatMap(cont => cont.destinos.map(dest => `<option value="${dest.nombre}">${dest.nombre}</option>`)).join('');
      origenInput.outerHTML = `<select aria-label="Origen" class="form-control" onclick="this.isSelectShown = true; revertirOrigen()">
                                  <option value="">Selecciona origen</option>
                                  ${options}
                                </select>`;
      this.isSelectShown = true;
    }
  }

  revertirOrigen() {
    const origenSelect = document.querySelector<HTMLSelectElement>('select[aria-label="Origen"]');
    if (origenSelect) {
      const nuevoInput = document.createElement('input');
      nuevoInput.type = 'text';
      nuevoInput.className = 'form-control';
      nuevoInput.setAttribute('aria-label', 'Origen');
      nuevoInput.setAttribute('placeholder', 'Origen');
      nuevoInput.addEventListener('click', () => this.desplegarOrigen());
      origenSelect.parentElement?.replaceChild(nuevoInput, origenSelect);
      this.isSelectShown = false;
    }
  }

  cambioDesplegables() {
    if (this.isSelectShown) {
      this.revertirOrigen();
    } else {
      this.desplegarOrigen();
    }
  }

}
