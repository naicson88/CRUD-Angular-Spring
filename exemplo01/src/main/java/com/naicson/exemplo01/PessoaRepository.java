package com.naicson.exemplo01;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PessoaRepository extends Repository<Pessoas, Integer> {
	
	List<Pessoas>findAll();
	Pessoas findById(int id);
	Pessoas save(Pessoas pessoa);
	void delete(Pessoas pessoa);
}
