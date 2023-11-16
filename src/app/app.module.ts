import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ServicosllComponent } from './servicosll/servicosll.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EcossistemaComponent } from './ecossistema/ecossistema.component';
import { ObservatorioComponent } from './observatorio/observatorio.component';
import { InscreverstartupComponent } from './inscreverstartup/inscreverstartup.component';
import { ObservatoriollComponent } from './observatorioll/observatorioll.component';
import { TornarinvestidorComponent } from './tornarinvestidor/tornarinvestidor.component';
import { LegislacaoComponent } from './legislacao/legislacao.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { EventoComponent } from './evento/evento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicosComponent,
    ServicosllComponent,
    SobreComponent,
    EcossistemaComponent,
    ObservatorioComponent,
    InscreverstartupComponent,
    ObservatoriollComponent,
    TornarinvestidorComponent,
    LegislacaoComponent,
    NoticiaComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
