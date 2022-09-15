package com.hexaware.mobilestore.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.mobilestore.entity.Customer;
import com.hexaware.mobilestore.exception.ResourceNotFoundException;
import com.hexaware.mobilestore.service.CustomerService;
@CrossOrigin("*")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
    
	@PostMapping("/addCustomer")
	public ResponseEntity<String> addCustomer(@RequestBody Customer customer){
		Customer rcustomer = customerService.addCustomer(customer);
		if(rcustomer!=null)
			return new ResponseEntity<>("Successfull added customer", HttpStatus.OK);
		else
			return new ResponseEntity<>("Successfull not added customer", HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/getallcustomers")
	public List<Customer> getAllCustomer(){
		return customerService.getAllCustomers();
		
	}
	@PutMapping("/updatecustomer/{cid}")
	public Customer updateCustomer(@RequestBody Customer newCustomer,@PathVariable("cid") Long customerId) throws ResourceNotFoundException {
		Customer customer =  customerService.getCustomerById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exists with id" +customerId));

		customer.setFirstName(newCustomer.getFirstName());
		customer.setLastName(newCustomer.getLastName());
		customer.setEmail(newCustomer.getEmail());
		customer.setAddress(newCustomer.getAddress());
		customer.setUserName(newCustomer.getUserName());
		customer.setPassword(newCustomer.getPassword());
		customer.setBalance(newCustomer.getBalance());
		
		
		return customerService.updateCustomer(customer);
		
	}
	
	@GetMapping("/findcustomerbyid/{cid}")
	public Customer getCustomerById(@PathVariable("cid") Long customerId){
		return customerService.getCustomerById(customerId).get();
	}
	
	@DeleteMapping("/deletecustomer/{cid}")
	public void deleteCustomerById(@PathVariable("cid") Long customerId){
		 customerService.deleteCustomerById(customerId);
	}
	
	@GetMapping("/findcustomer/{cusername}")
	public Customer getCustomerByName(@PathVariable("cusername") String userName){
		return customerService.getCustomerByUserName(userName);
	}
	
	
	
	
}
