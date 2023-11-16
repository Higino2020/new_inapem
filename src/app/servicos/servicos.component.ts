import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.less']
})
export class ServicosComponent {
  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html: '<h3><span">INAPEM</span>>Serviços</h3>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
