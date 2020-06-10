import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-adicioanar',
  templateUrl: './adicioanar.component.html',
  styleUrls: ['./adicioanar.component.css']
})
export class AdicioanarComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
 
  constructor( private router: Router,
              private service: ServiceService
              ) { }

  ngOnInit() {
  }
  
/*  prepararParaGuardar(nome: String, sobrenome: String, email: String){
    this.pessoa = new Pessoa(nome, sobrenome, email);
    this.salvarPessoa(this.pessoa);
  }*/

  salvarPessoa(){
    this.service.criarPessoa(this.pessoa).subscribe(
      data => {
        alert("Inserido com sucesso!!!");
        this.router.navigate(["listar"]);
      }
    )
  }

}
