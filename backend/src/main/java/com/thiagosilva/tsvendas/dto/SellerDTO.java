package com.thiagosilva.tsvendas.dto;

import java.io.Serializable;

import com.thiagosilva.tsvendas.entities.Seller;

/* Serializable é uma boa prática que garante que os objetos
 dessa classe possam ser convertidos para bytes, o que é
 vantajoso quando é preciso trafegar os objeto em rede,
 possa ser salvo em arquivos*/
public class SellerDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	
	public SellerDTO() {
		
	}

	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
//	Ajuda quando for preciso copiar os dados de um objeto seller para o DTO
	public SellerDTO(Seller entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
