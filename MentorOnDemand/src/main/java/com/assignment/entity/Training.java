package com.assignment.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="training")
public class Training {

	private static final long serialVersionUID=1L;
	
	@Id
	@Column(name="trainingId")
	private Integer trainingId;
	
	@Column(name="status")
	private String status;
	
	@Column(name="progress")
	private Integer progress=65;
	
	@Column(name="fees")
	private Integer fes=0;
	
	@Column(name="commission_percent")
	private Integer commissionPercent;
	
	@Column(name="rating")
	private Integer rating=0;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name="start_date")
	private Date startDate;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name="end_date")
	private Date endDate;
	
	@JsonFormat(pattern="HH:mm:ss")
	@Column(name="start_time")
	private String startTime;
	
	@JsonFormat(pattern="HH:mm:ss")
	@Column(name="end_time")
	private String endTime;
	
	@Column(name="amount_received")
	private int amountReceived=0;
	
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="mentor_id")
	private Integer mentorId;
	
	@Column(name="skill_id")
	private Integer skillId;
	
	@Column(name="razorpay_payment__id")
	private Long razorpayPaymentId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mentor_id",insertable=false,updatable=false)
	private Mentor mentor;
	

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "training_skill", joinColumns = { 
			@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "skill_id", 
					nullable = false, updatable = false) })
	private List<Skills> skill;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="technology_id")
	private Technology technology;

	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "training_payment", joinColumns = { 
			@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "payment_id", 
					nullable = false, updatable = false) })
	private List<Payment> payment;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "training_user", joinColumns = { 
			@JoinColumn(name = "training_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "user_id", 
					nullable = false, updatable = false) })
	private List<UserEntity> users;
	




	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getProgress() {
		return progress;
	}

	public void setProgress(Integer progress) {
		this.progress = progress;
	}

	public Integer getFes() {
		return fes;
	}

	public void setFes(Integer fes) {
		this.fes = fes;
	}

	
	public Integer getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}

	public Integer getCommissionPercent() {
		return commissionPercent;
	}

	public void setCommissionPercent(Integer commissionPercent) {
		this.commissionPercent = commissionPercent;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public int getAmountReceived() {
		return amountReceived;
	}

	public void setAmountReceived(int amountReceived) {
		this.amountReceived = amountReceived;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public Integer getSkillId() {
		return skillId;
	}

	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
	}

	public Long getRazorpayPaymentId() {
		return razorpayPaymentId;
	}

	public void setRazorpayPaymentId(Long razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}

	

	public Mentor getMentor() {
		return mentor;
	}

	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
	}

	public List<Skills> getSkill() {
		return skill;
	}

	public void setSkill(List<Skills> skill) {
		this.skill = skill;
	}

	public Technology getTechnology() {
		return technology;
	}

	public void setTechnology(Technology technology) {
		this.technology = technology;
	}

	public List<Payment> getPayment() {
		return payment;
	}

	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}

	public List<UserEntity> getUsers() {
		return users;
	}

	public void setUsers(List<UserEntity> users) {
		this.users = users;
	}

	

	
	
}
