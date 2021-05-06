package com.thiagosilva.tsvendas.dto;

import java.io.Serializable;

import com.thiagosilva.tsvendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private String saleName;
	private Double sum;
	
	public SaleSumDTO() {
	}

	public SaleSumDTO(Seller seller,  Double sum) {
		this.saleName = seller.getName();
		this.sum = sum;
	}

	public String getSaleName() {
		return saleName;
	}

	public void setSaleName(String saleName) {
		this.saleName = saleName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
	
	
}
