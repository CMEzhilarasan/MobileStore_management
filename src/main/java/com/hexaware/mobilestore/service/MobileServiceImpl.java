package com.hexaware.mobilestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.mobilestore.entity.Mobile;
import com.hexaware.mobilestore.exception.ResourceNotFoundException;
import com.hexaware.mobilestore.repository.MobileRepository;

@Service
public class MobileServiceImpl implements MobileService {
	
	@Autowired
	private MobileRepository mobileRepository;

	@Override
	public Mobile addMobile(Mobile mobile) {
		// TODO Auto-generated method stub
		return mobileRepository.save(mobile);
	}

	@Override
	public List<Mobile> getAllMobile() {
		// TODO Auto-generated method stub
		return mobileRepository.findAll();
	}

	@Override
	public List<Mobile> getMobileByManagerId(Long managerId) {
		// TODO Auto-generated method stub
		return mobileRepository.findByManager_ManagerId(managerId);
	}

	@Override
	public Optional<Mobile> getMobileById(Long mobileId) {
		// TODO Auto-generated method stub
		return mobileRepository.findById(mobileId);
	}

	@Override
	public Mobile getMobileByName(String mobileName) {
		// TODO Auto-generated method stub
		return mobileRepository.findByMobileName(mobileName);
	}

	@Override
	public void deleteMobileById(Long mobileId) {
		// TODO Auto-generated method stub
		mobileRepository.deleteById(mobileId);
		
	}

	@Override
	public Mobile updateMobile(Mobile mobile) throws ResourceNotFoundException {
		// TODO Auto-generated method stub
		return mobileRepository.save(mobile);
	}
	
	

}
