import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ecossistema',
  templateUrl: './ecossistema.component.html',
  styleUrls: ['./ecossistema.component.less']
})
export class EcossistemaComponent {




  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html: '<h3><span">INAPEM</span>>Ecosistema e Startup</h3>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
