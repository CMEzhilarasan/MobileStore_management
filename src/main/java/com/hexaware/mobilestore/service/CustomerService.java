package com.hexaware.mobilestore.service;
import java.util.List;
import java.util.Optional;


import com.hexaware.mobilestore.entity.Customer;
import com.hexaware.mobilestore.exception.ResourceNotFoundException;


public interface CustomerService {
   Customer addCustomer(Customer customer);
   List<Customer> getAllCustomers();
   Customer getCustomerByUserName(String userName);
   Optional<Customer> getCustomerById(Long customerId);
   
   Customer getCustomerByEmail(String email);
   void deleteCustomerById(Long customerId);
   Customer updateCustomer(Customer customer) throws ResourceNotFoundException;
   
}
