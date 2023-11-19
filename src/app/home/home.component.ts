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
      html: 'Bem-vindo a ',
      html2: '!',
      html3: '<p>Onde contribuimos no processo da divesificacao economica nacional e de modo ajudar no crescimento do tecido empresarial privado nacional.</p>'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }



}
