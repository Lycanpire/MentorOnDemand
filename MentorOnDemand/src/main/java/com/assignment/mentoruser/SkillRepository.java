package com.assignment.mentoruser;

import org.springframework.data.repository.Repository;

import com.assignment.entity.Skills;
import com.assignment.entity.UserEntity;

import java.util.List;

public interface SkillRepository extends Repository<Skills, Integer> {

    void delete(Skills skills);

    List<Skills> findAll();

    Skills findOne(int id);

    Skills save(Skills skills);
}
