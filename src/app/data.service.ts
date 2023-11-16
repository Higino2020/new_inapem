import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable
({
  providedIn: 'root',
})

export class DataService
{
  private mensagemSource = new BehaviorSubject<{html: string; css: string}>({
    html: '<p>Ola</p>',
    css: 'color: blue'
  });
  private mensagemSource0 = new BehaviorSubject<string>('');


  mensagemAtual0 = this.mensagemSource0.asObservable();
  mensagemAtual = this.mensagemSource.asObservable();

  atualizaMensagem(novaMensagem: {html: string; css: string}){
    this.mensagemSource.next(novaMensagem);
  }
  atualizaMensagem0(novaMensagem0: string){
    this.mensagemSource0.next(novaMensagem0);
  }
}
