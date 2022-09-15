package com.hexaware.mobilestore.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.mobilestore.entity.Mobile;
import com.hexaware.mobilestore.exception.ResourceNotFoundException;

public interface MobileService {
	
	   Mobile addMobile(Mobile customer);
	   List<Mobile> getAllMobile();
	   List<Mobile> getMobileByManagerId(Long managerId);
	   Optional<Mobile> getMobileById(Long mobileId);
	   Mobile getMobileByName(String mobileName);
	   void deleteMobileById(Long mobileId);
	   Mobile updateMobile(Mobile mobile) throws ResourceNotFoundException;
}
