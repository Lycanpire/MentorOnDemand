package com.assignment.mentoruser;

import org.springframework.data.repository.Repository;

import com.assignment.entity.Payment;
import com.assignment.entity.UserEntity;

import java.util.List;

public interface PaymentRepository extends Repository<Payment, Integer> {

    void delete(Payment payment);

    List<Payment> findAll();

    Payment findOne(int id);

    Payment save(Payment payment);

	List<Payment> findPaymentByUserId(Integer userid);
}
