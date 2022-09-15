package com.hexaware.mobilestore.entity;



import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order{
	
	@Id
	@Column(name="order_id")
	private String orderId;
	
	@Column(name = "custId")
	private Long customerId;
	
	@Column(name = "mobile_name")
	private String mobileName;
	
	@Column(name = "mobile_price")
	private Long mobilePrice;
	
	@Column(name = "quantity")
	private Long quantity;
	
	@Column(name = "amount")
	private double amount;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "order_date")
	private Date orderDate;
	
	
	
	public Order() {
		super();
	}



	public Order(Long customerId, String mobileName, Long mobilePrice, Long quantity, double amount,
			String status, Date orderDate) {
		super();
		this.customerId = customerId;
		this.mobileName = mobileName;
		this.mobilePrice = mobilePrice;
		this.quantity = quantity;
		this.amount = amount;
		this.status = status;
		this.orderDate = orderDate;
	}



	public String getOrderId() {
		return orderId;
	}



	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}



	public Long getCustomerId() {
		return customerId;
	}



	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}



	public String getMobileName() {
		return mobileName;
	}



	public void setMobileName(String mobileName) {
		this.mobileName = mobileName;
	}



	public Long getMobilePrice() {
		return mobilePrice;
	}



	public void setMobilePrice(Long mobilePrice) {
		this.mobilePrice = mobilePrice;
	}



	public Long getQuantity() {
		return quantity;
	}



	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}



	public double getAmount() {
		return amount;
	}



	public void setAmount(double amount) {
		this.amount = amount;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public Date getOrderDate() {
		return orderDate;
	}



	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}



	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", customerId=" + customerId + ", mobileName=" + mobileName
				+ ", mobilePrice=" + mobilePrice + ", quantity=" + quantity + ", amount=" + amount + ", status="
				+ status + ", orderDate=" + orderDate + "]";
	}



	


	}