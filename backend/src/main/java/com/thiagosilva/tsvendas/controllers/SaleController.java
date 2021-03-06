package com.thiagosilva.tsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thiagosilva.tsvendas.dto.SaleDTO;
import com.thiagosilva.tsvendas.dto.SaleSuccessDTO;
import com.thiagosilva.tsvendas.dto.SaleSumDTO;
import com.thiagosilva.tsvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		Page<SaleDTO> list = service.findAll(pageable);
		
//		Retorna a lista paginada recebida no corpo da requisição
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO >> amountGroupedBySeller(){
		List<SaleSumDTO> list = service.amountGroupedBySeller(); 
		
//		Retorna a lista recebida no corpo da requisição
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO >> successGroupedBySeller(){
		List<SaleSuccessDTO> list = service.successGroupedBySeller(); 
		
//		Retorna a lista recebida no corpo da requisição
		return ResponseEntity.ok(list);
	}
}
