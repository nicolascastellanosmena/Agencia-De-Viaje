import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';
import { ReservasComponent } from './page/reservas/reservas.component';
import { ContinenteDetailsComponent } from './page/continente-details/continente-details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'catalogo',component:CatalogoComponent},
    {path:'catalogo/:continenteId',component:ContinenteDetailsComponent},
    {path:'contactanos',component:ContactanosComponent},
    {path:'home',component:HomeComponent},
    {path:'iniciosesion',component:IniciosesionComponent},
    {path:'registro',component:RegistroComponent},
    {path:'reservas',component:ReservasComponent},
    {path:'**',redirectTo:'',component:HomeComponent}

];
