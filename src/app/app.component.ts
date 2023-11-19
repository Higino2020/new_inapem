import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  mostrarOverlay = false;

  inscreverS() {
    this.mostrarOverlay = true;
  }

  fechar_inscreverS() {
    this.mostrarOverlay = false;
  }


  title = 'inapem';
  mensagem!: { html3: string; html2: string; html: string; };
  mensagem0!: string;

  constructor(private DataService: DataService){}
  ngOnInit(){
    this.DataService.mensagemAtual.subscribe((mensagem) => {
      this.mensagem = mensagem;
    });
  }
}
