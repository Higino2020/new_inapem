import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-legislacao',
  templateUrl: './legislacao.component.html',
  styleUrls: ['./legislacao.component.less']
})
export class LegislacaoComponent {
  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html2: '<img src="assets/img/constantes/seta.png"> Legislação',
      html: '',
      html3: ''
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }

}
