import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pais-details',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './pais-details.component.html',
  styleUrl: './pais-details.component.css'
})
export class PaisDetailsComponent {

}
