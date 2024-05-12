import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { DestinosService } from '../../services/destinos.service';
import { CurrencyPipe } from '@angular/common';
import { Destinos } from '../../common/destinos';
@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [FooterComponent,CurrencyPipe],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit{
  bDestinos: Destinos = { continentes: [] };
  reserva: any;

constructor(private service: DestinosService,private router:Router) { }

ngOnInit(): void {
  this.service.reserva$.subscribe(reserva => {
    this.reserva = reserva;
  });
}
scrollToTop() {
  window.scrollTo(0, 0);
}

}
