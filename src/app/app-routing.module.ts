import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ObservatorioComponent } from './observatorio/observatorio.component';
import { ObservatoriollComponent } from './observatorioll/observatorioll.component';
import { LegislacaoComponent } from './legislacao/legislacao.component';
import { EcossistemaComponent } from './ecossistema/ecossistema.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ServicosllComponent } from './servicosll/servicosll.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'observatorio', component: ObservatorioComponent },
  { path: 'observatorioll', component: ObservatoriollComponent },
  { path: 'legislacao', component: LegislacaoComponent },
  { path: 'ecossistema', component: EcossistemaComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'servicosll', component: ServicosllComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
