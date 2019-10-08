package com.assignment.mentoruser;

import java.util.List;

import com.assignment.entity.Skills;
import com.assignment.entity.UserEntity;

public interface SkillService {

	Skills create(Skills skills);

	Skills delete(int id);

    List<Skills> findAll();

    Skills findById(int id);

    Skills update(Skills skills);
}
