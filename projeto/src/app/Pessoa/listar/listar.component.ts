import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  pessoa: Pessoa[];

  constructor(private service:ServiceService,
              private router: Router) { }

  ngOnInit() {
    this.service.getPessoas().subscribe(
      data => {
        console.log(this.pessoa = data);
      }
    )
  }

  Editar(pessoa: Pessoa): void{
    localStorage.setItem("id",pessoa.id.toString());
    this.router.navigate(["editar"]);
  }
  //Deletar usuario da tabela
  Deletar(pessoas: Pessoa){
    this.service.deletarPessoa(pessoas).subscribe( data => {
      this.pessoa = this.pessoa.filter(p=>p!==pessoas);
      alert("Usuário deletado com sucesso!!!");
      }    
    )
  }

}
