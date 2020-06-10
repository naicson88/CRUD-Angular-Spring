import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../Modelo/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
 
  Url = 'http://localhost:8080/exemplo01/pessoas';

  getPessoas(){
    return this.http.get<Pessoa[]>(this.Url);
  }

  criarPessoa(pessoa: Pessoa){
    return this.http.post<Pessoa>(this.Url, pessoa);
  }

  getPessoaId(id:number){
    return this.http.get<Pessoa>(this.Url+"/"+id);
  }

  editarPessoa(pessoa:Pessoa){
    return this.http.put<Pessoa>(this.Url+"/"+pessoa.id,pessoa);
}

deletarPessoa(pessoa:Pessoa){
  return this.http.delete<Pessoa>(this.Url+"/"+pessoa.id);
  }

}
