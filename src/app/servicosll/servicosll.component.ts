import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-servicosll',
  templateUrl: './servicosll.component.html',
  styleUrls: ['./servicosll.component.less']
})
export class ServicosllComponent {
  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html2: '<img src="assets/img/constantes/seta.png"> Serviços',
      html: '',
      html3: ''
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
