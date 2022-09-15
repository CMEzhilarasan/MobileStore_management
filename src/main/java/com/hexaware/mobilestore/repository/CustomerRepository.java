package com.hexaware.mobilestore.repository;

import org.springframework.data.jpa.repository.JpaRepository;



import com.hexaware.mobilestore.entity.Customer;



public interface CustomerRepository extends JpaRepository<Customer, Long> {
	public Customer findByUserName(String userName);
	
}
