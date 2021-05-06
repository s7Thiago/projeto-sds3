package com.thiagosilva.tsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.thiagosilva.tsvendas.dto.SaleDTO;
import com.thiagosilva.tsvendas.entities.Sale;
import com.thiagosilva.tsvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired // Injeta a dependência de maneira mais transparente (instancia a dependência implicitamente)
	private SaleRepository repository;
	
	public Page<SaleDTO> findAll(Pageable pageable){
//		Faz o a busca dos dados paginados
		Page<Sale> result = repository.findAll(pageable);
		
//		Pega a cada x do tipo Sale em result e retorna em, uma nova lista cujos elementos foram convertidos
//		para uma página de elementos do tipo SaleDTO
		return result.map(x -> new SaleDTO(x));  
	}

}
