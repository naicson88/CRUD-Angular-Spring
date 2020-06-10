package com.naicson.exemplo01;


import javax.persistence.*;

@Entity
@Table(name = "pessoas")
public class Pessoas {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String nome;
	@Column 
	private String sobrenome;
	@Column
	private String email;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return nome;
	}
	public void setName(String name) {
		this.nome = name;
	}
	public String getSobreNome() {
		return sobrenome;
	}
	public void setSobreNome(String sobreNome) {
		this.sobrenome = sobreNome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
