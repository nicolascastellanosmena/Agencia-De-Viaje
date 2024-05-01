import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, FooterComponent, CatalogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AgenciaViaje';
}
