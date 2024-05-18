import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsComponent } from '../../component/cards/cards.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { DestinosService } from '../../services/destinos.service';
import { Destinos } from '../../common/destinos';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink,CardsComponent,FooterComponent,SlicePipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{

  bDestinos:Destinos={continentes:[]}

  constructor(private servicio:DestinosService){}

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.servicio.getDestinos().subscribe(
      {
        next: (destino) => {
          this.bDestinos = destino;
           
        },
        error: (error) => {
          console.error('Error al cargar los destinos:', error);
         
        },
        complete: () => {         
        }
      }
    )


  }

  }

