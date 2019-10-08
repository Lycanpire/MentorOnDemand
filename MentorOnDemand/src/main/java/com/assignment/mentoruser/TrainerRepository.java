package com.assignment.mentoruser;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import com.assignment.entity.Training;

import java.util.Date;
import java.util.List;

public interface TrainerRepository extends Repository<Training, Integer> {

    void delete(Training trainer);

    List<Training> findAll();

    Training findOne(int id);

    Training save(Training trainer);
    @Query("select training from Training training where training.mentor.id=?")
    List<Training> findTrainingByMentorId(Integer mentorId);

    @Query("select training from Training training where training.mentor.id=? and training.trainingId=?")
    Training findByTrainingIdAndMentorId(Integer trainingId,Integer mentorId);
    
    List<Training> findTrainingByUserId(Integer userId);
    
    Training findByTrainingIdAndUserId(Integer trainingId,Integer userId);
    
    
    List<Training> findTrainingBystartDateBetween(Date startDate,Date endDate);
    
    
    

	
}
