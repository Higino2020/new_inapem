import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.less']
})
export class SobreComponent {
  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html2: '<img src="assets/img/constantes/seta.png"> Sobre',
      html: '',
      html3: ''
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
