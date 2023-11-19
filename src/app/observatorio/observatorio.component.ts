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
      html2: '<img src="assets/img/constantes/seta.png"> Observatório',
      html: '',
      html3: ''
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
