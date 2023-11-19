import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observatorioll',
  templateUrl: './observatorioll.component.html',
  styleUrls: ['./observatorioll.component.less']
})
export class ObservatoriollComponent {
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
