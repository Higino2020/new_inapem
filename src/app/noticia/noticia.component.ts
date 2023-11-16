import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.less']
})
export class NoticiaComponent {
  constructor(private dataservice: DataService){}

  ngOnInit() {
    const novaMensagem = {
      html: '<h3><span">INAPEM</span>>Noticias</h3>',
      css: 'color: red;'
    }
    this.dataservice.atualizaMensagem(novaMensagem);
  }
}
