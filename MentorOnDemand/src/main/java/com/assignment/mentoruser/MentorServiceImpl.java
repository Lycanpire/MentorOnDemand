package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Mentor;
import com.assignment.entity.UserEntity;

@Service
public class MentorServiceImpl implements MentorService{

    @Autowired
    private MentorRepository mentorRepository;

    @Override
    public Mentor create(Mentor mentor) {
        return mentorRepository.save(mentor);
    }

    @Override
    public Mentor delete(int id) {
    	Mentor mentor = findById(id);
        if(mentor != null){
            mentorRepository.delete(mentor);
        }
        return mentor;
    }

    @Override
    public List<Mentor> findAll() {
        return mentorRepository.findAll();
    }

    @Override
    public Mentor findById(int id) {
        return mentorRepository.findOne(id);
    }

    @Override
    public Mentor update(Mentor mentor) {
        return mentorRepository.save(mentor);
    }
    @Override
  	public Mentor findUser(String userName, String password) {
  		
  		return mentorRepository.findUser(userName, password);
  	}

}
