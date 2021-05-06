package com.thiagosilva.tsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thiagosilva.tsvendas.dto.SaleDTO;
import com.thiagosilva.tsvendas.dto.SaleSuccessDTO;
import com.thiagosilva.tsvendas.dto.SaleSumDTO;
import com.thiagosilva.tsvendas.entities.Sale;
import com.thiagosilva.tsvendas.repositories.SaleRepository;
import com.thiagosilva.tsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired // Injeta a dependência de maneira mais transparente (instancia a dependência implicitamente)
	private SaleRepository repository;
	
//	Está sendo usado para evitar o comportamento onde ao se fazer uma requisição na tabela tbl_sales, são feitas
//	diversas consultas, uma para cada Sellers envolvido no resultado. Esta é uma solução específica para o contexto
//	desta aplicação, basicamente vai trazer todos os Sellers do banco e salvar em memória, dessa forma, quando o
//	Hibernate detectar que todos os dados já estão carregados, não irão ocorrer múltiplas consultas desnecessárias
	@Autowired
	SellerRepository sellerRepository;
	
//	Esta anotation garante que toda operação com o banco seja resolvida aqui no service, impedindo que ocorra locking
//	no banco de dados através do readOnly = true, pois como temos aqui uma operação de fato somente de leitura, é
//	interessante especificar para que o locking de escrita não seja feito desnecessariamente.
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
//		Trazendo todos os dados dos Sellers para a memória antes de execultar a requisição de Sales
		sellerRepository.findAll();
//		Faz o a busca dos dados paginados
		Page<Sale> result = repository.findAll(pageable);
		
//		Pega a cada x do tipo Sale em result e retorna em, uma nova lista cujos elementos foram convertidos
//		para uma página de elementos do tipo SaleDTO
		return result.map(x -> new SaleDTO(x));  
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repository.amountGroupedBySeller(); 
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return repository.successGroupedBySeller (); 
	}

}
