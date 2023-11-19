import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.less']
})
export class EventoComponent {
  // constructor(private dataservice: DataService){}

  // ngOnInit() {
  //   const novaMensagem = {
  //     html: '<h3><span">INAPEM</span>>Eventos</h3>',
  //     css: 'color: red;'
  //   }
  //   this.dataservice.atualizaMensagem(novaMensagem);
  // }
}
