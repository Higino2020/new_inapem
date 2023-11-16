import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observatorio',
  templateUrl: './observatorio.component.html',
  styleUrls: ['./observatorio.component.less']
})
export class ObservatorioComponent {
  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html: '<h3><span">INAPEM</span>>Observatório</h3>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
