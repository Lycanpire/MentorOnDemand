package com.assignment.mentoruser;

import java.util.Date;
import java.util.List;

import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

public interface TrainerService {

	Training create(Training trainer);

	Training delete(int id);

    List<Training> findAll();

    Training findById(int id);

    Training update(Training trainer);

	List<Training> findByMentorId(Integer id);
	List<Training> findByUserId(Integer id);
	Training findByTrainingIdAndMentorId(Integer trainingid,Integer userId);
	Training findByTrainingIdAndUserId(Integer trainingid,Integer mentorId);
	 List<Training> findTrainingBystartDateBetween(Date startDate,Date endDate);
}
