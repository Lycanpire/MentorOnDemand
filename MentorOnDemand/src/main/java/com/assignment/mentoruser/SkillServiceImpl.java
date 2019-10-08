package com.assignment.mentoruser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.entity.Skills;
import com.assignment.entity.UserEntity;

import java.util.List;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public Skills create(Skills skills) {
        return skillRepository.save(skills);
    }

    @Override
    public Skills delete(int id) {
    	Skills skills = findById(id);
        if(skills != null){
            skillRepository.delete(skills);
        }
        return skills;
    }

    @Override
    public List<Skills> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public Skills findById(int id) {
        return skillRepository.findOne(id);
    }

    @Override
    public Skills update(Skills skills) {
        return skillRepository.save(skills);
    }
}
