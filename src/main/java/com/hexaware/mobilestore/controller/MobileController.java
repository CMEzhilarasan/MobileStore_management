package com.hexaware.mobilestore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.mobilestore.entity.Mobile;
import com.hexaware.mobilestore.exception.ResourceNotFoundException;
import com.hexaware.mobilestore.service.MobileService;

@RestController
@RequestMapping("/mobile")
public class MobileController {
	
	@Autowired
	private MobileService mobileService;
	
	@PostMapping("/addmobile")
	public ResponseEntity<String> addMobile(@RequestBody Mobile mobile){
		Mobile rmobile = mobileService.addMobile(mobile);
		if(rmobile!=null)
			return new ResponseEntity<>("Successfull added mobile", HttpStatus.OK);
		else
			return new ResponseEntity<>("Successfull not added mobile", HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/getallmobiles")
	public List<Mobile> getAllMobile(){
		return mobileService.getAllMobile();
		
	}
	@PutMapping("/updatemobile/{mid}")
	public Mobile updatemobile(@RequestBody Mobile newMobile,@PathVariable("mid") Long mobileId) throws ResourceNotFoundException {
		Mobile mobile =  mobileService.getMobileById(mobileId)
				.orElseThrow(() -> new ResourceNotFoundException("Mobile not exists with id" +mobileId));

		mobile.setMobileName(newMobile.getMobileName());
		mobile.setMobilePrice(newMobile.getMobilePrice());
		mobile.setMobileDescription(newMobile.getMobileDescription());

		return mobileService.updateMobile(mobile);
		
	}
	
	@GetMapping("/findmobilebyid/{vid}")
	public Mobile getMobileById(@PathVariable("vid") Long mobileId){
		return mobileService.getMobileById(mobileId).get();
	}
	
	@DeleteMapping("/deletemobile/{vid}")
	public void deleteMobileById(@PathVariable("vid") Long mobileId){
		mobileService.deleteMobileById(mobileId);
	}
	
	@GetMapping("/findmobilebyname/{vname}")
	public Mobile getMobileByName(@PathVariable("vname") String mobileName){
		return mobileService.getMobileByName(mobileName);
	}
	
	@GetMapping("/findmobilesbymanagerid/{mid}")
	public List<Mobile> getMobileByManagerId(@PathVariable("mid") Long managerId){
		return mobileService.getMobileByManagerId(managerId);
	}

}
