import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';
import { ReservasComponent } from './page/reservas/reservas.component';
import { ContinenteDetailsComponent } from './page/continente-details/continente-details.component';
import { PaisDetailsComponent } from './page/pais-details/pais-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TerminosYCondicionesComponent } from './page/terminos-y-condiciones/terminos-y-condiciones.component';

export const routes: Routes = [
    {path:'',title:"Home",component:HomeComponent},
    {path:'catalogo',title:"Catálogo",component:CatalogoComponent},
    {path:'catalogo/:continenteId',component:ContinenteDetailsComponent},
    {path:'catalogo/:continenteId/:parametro',title:'Tu destino',component:PaisDetailsComponent},
    {path:'contactanos',title:"Contáctanos",component:ContactanosComponent},
    {path:'home',title:"Home",component:HomeComponent},
    {path:'iniciosesion',title:"Iniciar Sesión",component:IniciosesionComponent},
    {path:'registro',title:"Regístrate",component:RegistroComponent},
    {path:'reservas',title:"Reservas",component:ReservasComponent},
    {path:'terminos-condiciones',title:"Política de Empresa",component:TerminosYCondicionesComponent},
    {path: '**', title:"ERROR 404",component: PageNotFoundComponent},
];
