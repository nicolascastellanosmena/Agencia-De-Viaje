import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Destinos } from '../../common/destinos';
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
  bDestinos: Destinos={continentes:[]};

  constructor(private servicio: DestinosService, private router: Router, private activaRouter: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.loadDestino();
  }
  
  loadDestino() {
    const continenteId = this.activaRouter.snapshot.params['continenteId'];
    const parametro = this.activaRouter.snapshot.params['parametro'];
  
    this.servicio.getDestino(parametro).subscribe({
      next: (data) => {
        if (data) {
          this.bDestinos = { continentes: [{
            destinos: [data],
            nombre: '',
            descripcion: '',
            titulo: '',
            slogan: '',
            imagenes_destacadas: []
          }] };
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
  
  cambiarDestino(id: string) {
    const continenteId = this.activaRouter.snapshot.params['continenteId'];
    this.router.navigate([`/catalogo/${continenteId}/${id}`]);
  }
  
  
}
