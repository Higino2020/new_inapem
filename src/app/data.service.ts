import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable
({
  providedIn: 'root',
})

export class DataService
{
  private mensagemSource = new BehaviorSubject<{html2: string; html: string; html3: string}>({
    html: '',
    html2:'',
    html3: ''
  });

  mensagemAtual = this.mensagemSource.asObservable();

  atualizaMensagem(novaMensagem: {html3: string; html2: string; html: string;}){
    this.mensagemSource.next(novaMensagem);
  }
}
