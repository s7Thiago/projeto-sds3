package com.thiagosilva.tsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.thiagosilva.tsvendas.dto.SaleSumDTO;
import com.thiagosilva.tsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
//	Usando JPQL para fazer a consulta customizada
	@Query("SELECT new com.thiagosilva.tsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
}
