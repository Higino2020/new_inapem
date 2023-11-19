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
      html2: '<img src="assets/img/constantes/seta.png"> Ecossistema',
      html: '',
      html3: ''
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
