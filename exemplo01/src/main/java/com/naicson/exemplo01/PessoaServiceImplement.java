package com.naicson.exemplo01;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaServiceImplement implements PessoaService {
	@Autowired
	private PessoaRepository repositorio;
	
	
	@Override
	public List<Pessoas> listar() {
		return repositorio.findAll();
	}

	@Override
	public Pessoas listarId(int id) {
		return repositorio.findById(id);
	}

	@Override
	public Pessoas add(Pessoas pessoa) {
		return repositorio.save(pessoa);
	}

	@Override
	public Pessoas editar(Pessoas pessoa) {
		return repositorio.save(pessoa);
	}

	@Override
	public Pessoas deletar(int id) {
		Pessoas pessoa = repositorio.findById(id);
		if(pessoa != null) {
			repositorio.delete(pessoa);
		}
		return pessoa;
	}
	
}
