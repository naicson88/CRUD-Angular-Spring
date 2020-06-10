import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router,
              private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPessoaId(+id).subscribe(data =>{
      this.pessoa = data;
    })
  }

  Atualizar(pessoa:Pessoa){
    this.service.editarPessoa(pessoa).subscribe(
      data =>{
        this.pessoa = data;
        alert("Atualizado com sucesso!!!");
        this.router.navigate(["listar"]);
      }
    )
  }

}
