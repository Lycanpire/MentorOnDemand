package com.assignment.mentoruser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Skills;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/skills"})
public class SkillController {

	 @Autowired
	    private SkillService skillService;

	    @PostMapping
	    public Skills create(@RequestBody Skills skills){
	        return skillService.create(skills);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Skills findOne(@PathVariable("id") int id){
	        return skillService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Skills update(@PathVariable("id") int id, @RequestBody Skills skills){
	    	skills.setId(id);
	        return skillService.update(skills);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Skills delete(@PathVariable("id") int id) {
	        return skillService.delete(id);
	    }

	    @GetMapping
	    public List<Skills> findAll(){
	        return skillService.findAll();
	    }

}
