import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { DestinosComponent } from './page/destinos/destinos.component';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './page/registro/registro.component';
import { ReservasComponent } from './page/reservas/reservas.component';
import { AfricaComponent } from './page/catalogo/africa/africa.component';
import { Component } from '@angular/core';
import { EuropaComponent } from './page/catalogo/europa/europa.component';
import { AsiaComponent } from './page/catalogo/asia/asia.component';
import { AmericaComponent } from './page/catalogo/america/america.component';




export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'catalogo',component:CatalogoComponent},
    {path:'europa',component:EuropaComponent},
    {path:'asia',component:AsiaComponent},
    {path:'america',component:AmericaComponent},
    {path:'africa',component:AfricaComponent},
    {path:'contactanos',component:ContactanosComponent},
    {path:'home',component:HomeComponent},
    {path:'iniciosesion',component:IniciosesionComponent},
    {path:'registro',component:RegistroComponent},
    {path:'reservas',component:ReservasComponent},
    {path:'**',redirectTo:'',component:HomeComponent}

];
