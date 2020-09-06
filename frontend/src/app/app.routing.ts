import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Route } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ContadorLuzComponent } from './components/contadorLuz/contadorLuz.component';
import { ContadorAguaComponent } from './components/contadorAgua/contadorAgua.component';
import { GatewaysComponent } from './components/gateways/gateways.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { CreateLuzComponent } from './components/create-luz/create-luz.component';
import { CreateGatewaysComponent } from './components/create-gateways/create-gateways.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'crear/contadorAgua', component: CreateComponent},
    {path: 'crear/contadorLuz', component: CreateLuzComponent},
    {path: 'crear/gateway', component: CreateGatewaysComponent},
    {path: 'inicio/editar/:name', component: EditComponent},
    {path: 'contadoresLuz', component: ContadorLuzComponent},
    {path: 'contadoresAgua', component: ContadorAguaComponent},
    {path: 'gateways', component: GatewaysComponent},
    {path: 'seleccion', component: SeleccionComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);