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
      html: '<h3><span">INAPEM</span>>Legislação</h3>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }

}
