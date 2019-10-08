package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;

import java.util.Date;
import java.util.List;

@Service
public class TrainerServiceImpl implements TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    @Override
    public Training create(Training trainer) {
        return trainerRepository.save(trainer);
    }

    @Override
    public Training delete(int id) {
    	Training trainer = findById(id);
        if(trainer != null){
            trainerRepository.delete(trainer);
        }
        return trainer;
    }

    @Override
    public List<Training> findAll() {
        return trainerRepository.findAll();
    }

    @Override
    public Training findById(int id) {
        return trainerRepository.findOne(id);
    }

    @Override
    public Training update(Training trainer) {
        return trainerRepository.save(trainer);
    }

	@Override
	public List<Training> findByMentorId(Integer mentorId) {
		// TODO Auto-generated method stub
		return trainerRepository.findTrainingByMentorId( mentorId) ;
	}

	@Override
	public List<Training> findByUserId(Integer userId) {
		// TODO Auto-generated method stub
		return trainerRepository.findTrainingByUserId( userId) ;
	}

	@Override
	public Training findByTrainingIdAndMentorId(Integer trainingId, Integer userId) {
		// TODO Auto-generated method stub
		return trainerRepository.findByTrainingIdAndMentorId( trainingId, userId);
	}

	@Override
	public Training findByTrainingIdAndUserId(Integer trainingId, Integer mentorId) {
		// TODO Auto-generated method stub
		return trainerRepository.findByTrainingIdAndUserId( trainingId, mentorId);
	}

	@Override
	public List<Training> findTrainingBystartDateBetween(Date startDate, Date endDate) {
		// TODO Auto-generated method stub
		return trainerRepository.findTrainingBystartDateBetween( startDate,endDate);
	}
}
