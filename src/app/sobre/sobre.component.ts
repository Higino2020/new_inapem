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
      html: '<h3><span">INAPEM</span>>Sobre</h3>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
