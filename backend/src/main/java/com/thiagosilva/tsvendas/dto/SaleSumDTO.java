package com.thiagosilva.tsvendas.dto;

import java.io.Serializable;

import com.thiagosilva.tsvendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Double sum;
	
	public SaleSumDTO() {
	}

	public SaleSumDTO(Seller seller,  Double sum) {
		this.sellerName = seller.getName();
		this.sum = sum;
	}

	public String getSaleName() {
		return sellerName;
	}

	public void setSaleName(String saleName) {
		this.sellerName = saleName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
	
	
}