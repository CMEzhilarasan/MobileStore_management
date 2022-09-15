package com.hexaware.mobilestore.entity;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "mobile")
public class Mobile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "mob_id")
	private Long mobileId;
	
	@Column(name = "mob_name", nullable = false)
	private String mobileName;
	
	@Column(name = "mob_price", nullable = false)
	private double mobilePrice;
	
	@Column(name = "mob_description")
	private String mobileDescription;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "managerid")
	private Manager manager;

	public Mobile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mobile(String mobileName, double mobilePrice, String mobileDescription, Manager manager) {
		super();
		this.mobileName = mobileName;
		this.mobilePrice = mobilePrice;
		this.mobileDescription = mobileDescription;
		this.manager = manager;
	}

	public Long getMobileId() {
		return mobileId;
	}

	public void setMobileId(Long mobileId) {
		this.mobileId = mobileId;
	}

	public String getMobileName() {
		return mobileName;
	}

	public void setMobileName(String mobileName) {
		this.mobileName = mobileName;
	}

	public double getMobilePrice() {
		return mobilePrice;
	}

	public void setMobilePrice(double mobilePrice) {
		this.mobilePrice = mobilePrice;
	}

	public String getMobileDescription() {
		return mobileDescription;
	}

	public void setMobileDescription(String mobileDescription) {
		this.mobileDescription = mobileDescription;
	}

	public Manager getManager() {
		return manager;
	}

	public void setCustomer(Manager manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "Mobile [mobileId=" + mobileId + ", mobileName=" + mobileName + ", mobilePrice="
				+ mobilePrice + ", mobileDescription=" + mobileDescription + ", manager=" + manager + "]";
	}
	
	
	

}
