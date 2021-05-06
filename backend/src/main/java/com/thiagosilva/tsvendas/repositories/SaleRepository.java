package com.thiagosilva.tsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiagosilva.tsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	

}
