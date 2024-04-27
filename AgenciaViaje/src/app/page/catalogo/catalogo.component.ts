import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsComponent } from '../../component/cards/cards.component';
import { FooterComponent } from '../../component/footer/footer.component';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink,CardsComponent,FooterComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  

}
