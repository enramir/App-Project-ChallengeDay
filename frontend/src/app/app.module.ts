import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { ContadorAguaComponent } from './components/contadorAgua/contadorAgua.component';
import { CreateLuzComponent } from './components/create-luz/create-luz.component';
import { CreateGatewaysComponent } from './components/create-gateways/create-gateways.component';
import { ContadorLuzComponent } from './components/contadorLuz/contadorLuz.component';
import { GatewaysComponent } from './components/gateways/gateways.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    CreateComponent,
    EditComponent,
    SeleccionComponent,
    ContadorAguaComponent,
    CreateLuzComponent,
    CreateGatewaysComponent,
    GatewaysComponent,
    ContadorLuzComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule 
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
