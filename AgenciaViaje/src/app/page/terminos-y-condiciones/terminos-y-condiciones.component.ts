import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-terminos-y-condiciones',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrl: './terminos-y-condiciones.component.css'
})
export class TerminosYCondicionesComponent {

}
