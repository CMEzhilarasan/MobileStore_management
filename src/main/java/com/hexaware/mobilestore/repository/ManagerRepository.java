package com.hexaware.mobilestore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.mobilestore.entity.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long>{
	public Manager findByUserName(String userName);
	public Manager findByEmail(String email);

}
