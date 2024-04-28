import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { DestinosComponent } from './page/destinos/destinos.component';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';
import { ReservasComponent } from './page/reservas/reservas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'catalogo',component:CatalogoComponent},
    {path:'contactanos',component:ContactanosComponent},
    {path:'destinos',component:DestinosComponent},
    {path:'home',component:HomeComponent},
    {path:'iniciosesion',component:IniciosesionComponent},
    {path:'registro',component:RegistroComponent},
    {path:'reservas',component:ReservasComponent},
    {path: '**', component: PageNotFoundComponent},

];
