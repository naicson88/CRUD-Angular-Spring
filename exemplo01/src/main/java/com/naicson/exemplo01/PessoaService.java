package com.naicson.exemplo01;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface PessoaService {
	
	List<Pessoas> listar();
	Pessoas listarId(int id);
	Pessoas add(Pessoas pessoa);
	Pessoas editar(Pessoas pessoa);
	Pessoas deletar(int id );
}
