import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{

constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html: '<h3>Bem-vindo a <span">INAPEM</span>!</h3><p>Onde contribuimos no processo da divesificacao economica nacional e de modo ajudar no crescimento do tecido empresarial privado nacional.</p>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }



}
