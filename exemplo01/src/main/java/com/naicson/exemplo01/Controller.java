package com.naicson.exemplo01;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/pessoas"})
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class Controller {
	
	@Autowired
	PessoaService service;
	
	@GetMapping
	public List<Pessoas> listar(){
		return service.listar();
	}
	
	@PostMapping
	public Pessoas adicionar(@RequestBody Pessoas pessoa) {
		return service.add(pessoa);
	}
	
	@GetMapping(path = {"/{id}"})
	public Pessoas listarId(@PathVariable("id") int id) {
		return service.listarId(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Pessoas editar(@RequestBody Pessoas pessoa, @PathVariable("id") int id) {
		pessoa.setId(id);
		return service.editar(pessoa);
	}
	
	@DeleteMapping(path = ("/{id}"))
	public Pessoas deletar(@PathVariable("id") int id) {
		return service.deletar(id);
	}
}
