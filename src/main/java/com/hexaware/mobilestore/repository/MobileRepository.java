package com.hexaware.mobilestore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.mobilestore.entity.Mobile;


public interface MobileRepository extends JpaRepository<Mobile, Long> {
	public Mobile findByMobileName(String mobileName);
	public List<Mobile> findByManager_ManagerId(Long managerId);
}