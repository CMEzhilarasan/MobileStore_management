package com.hexaware.mobilestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.mobilestore.entity.Order;
import com.hexaware.mobilestore.exception.ResourceNotFoundException;
import com.hexaware.mobilestore.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public Order placeOrder(Order order) {
		// TODO Auto-generated method stub
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return orderRepository.findAll();
	}

	@Override
	public Optional<Order> getOrderById(Long orderId) {
		// TODO Auto-generated method stub
		return orderRepository.findById(orderId);
	}

	@Override
	public void deleteOrderById(Long orderId) {
		// TODO Auto-generated method stub
		orderRepository.deleteById(orderId);
		
	}

	@Override
	public Order updateOrder(Order order) throws ResourceNotFoundException {
		// TODO Auto-generated method stub
		return orderRepository.save(order);
	}

}
