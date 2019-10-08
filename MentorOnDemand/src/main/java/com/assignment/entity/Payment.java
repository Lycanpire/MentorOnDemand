package com.assignment.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="txn_type")
	private String txnType;
	
	@Column(name="amount")
	private int amount;
	
	@Column(name="remarks")
	private String remarks;
	
	@Column(name="mentor_id")
	private Integer mentorId;
	
	@Column(name="mentor_name")
	private String mentorName;
	
	@Column(name="training_id")
	private Integer trainingId;
	
	@Column(name="tech_name")
	private String techName;
	
	@Column(name="total_amount_to_mentor")
	private Integer totalAmountToMentor;
	@Column(name="user_id")
	private Integer userId;
	



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}

	public Integer getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}



	public Integer getTotalAmountToMentor() {
		return totalAmountToMentor;
	}

	public void setTotalAmountToMentor(Integer totalAmountToMentor) {
		this.totalAmountToMentor = totalAmountToMentor;
	}

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
    public void paymenttrainer(Integer amount)
	{
		this.totalAmountToMentor=this.totalAmountToMentor+amount;
	}

	public void setamt(String remark, int amt) {
		// TODO Auto-generated method stub
		
		if(remark.equals(this.remarks))
			return;
		else
		{
			this.remarks=remark;
			this.totalAmountToMentor=this.totalAmountToMentor+amt;
		}
	}
	
}

