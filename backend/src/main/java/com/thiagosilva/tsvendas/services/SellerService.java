package com.thiagosilva.tsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thiagosilva.tsvendas.dto.SellerDTO;
import com.thiagosilva.tsvendas.entities.Seller;
import com.thiagosilva.tsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired // Injeta a dependência de maneira mais transparente (instancia a dependência implicitamente)
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
//		Pega a cada x do tipo Seller em result e retorna em, uma nova lista cujos elementos foram convertidos
//		para elementos do tipo SellerDTO
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());  
	}

}
