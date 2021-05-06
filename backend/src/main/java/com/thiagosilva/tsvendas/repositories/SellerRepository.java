package com.thiagosilva.tsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiagosilva.tsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
