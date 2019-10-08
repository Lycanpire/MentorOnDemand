package com.assignment.mentoruser;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.assignment.entity.Technology;
import com.assignment.entity.Training;
import com.assignment.entity.UserEntity;



@RestController
//@RequestMapping({"/api"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping({"/trainer"})
public class TrainerController {

	 @Autowired
	    private TrainerService trainerService;
	 @Autowired
	 private UserService userService;

	    @PostMapping(path = {"/{id}"})
	    public Training create(@RequestBody Training trainer){
	        return trainerService.create(trainer);
	    }

	    @GetMapping(path = {"/{id}"})
	    public Training findOne(@PathVariable("id") int id){
	        return trainerService.findById(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public Training update(@PathVariable("id") int id, @RequestBody Training trainer){
	    	trainer.setTrainingId(id);
	        return trainerService.update(trainer);
	    }

	    @DeleteMapping(path ={"/{id}"})
	    public Training delete(@PathVariable("id") int id) {
	        return trainerService.delete(id);
	    }

	    @GetMapping
	    public List<Training> findAll(){
	        return trainerService.findAll();
	    }

	    @GetMapping("/Trainingbymentorid/{mentorId}")
	    public List <Training > getCoursesByMentor(@PathVariable(value = "mentorId") Integer mentorId) {
	        return trainerService.findByMentorId(mentorId);
	    }
	    @GetMapping("/Trainingbyuserid/{userId}")
	    public  List <Training > getCoursesByUser(@PathVariable(value = "userId") Integer userId) {
	        return trainerService.findByUserId(userId);
	    }
	    @GetMapping("/findByTrainingIdAndMentorId/{mentorId}/{trainingId}")
	    public  Training findByTrainingIdAndMentorId(@PathVariable(value = "mentorId") Integer mentorId,
	            @PathVariable(value = "trainingId") Integer trainingId) {
	        return trainerService.findByTrainingIdAndMentorId(mentorId, trainingId);
	    }
	    @GetMapping("/findByTrainingIdAnduserId/{mentorId}/{trainingId}")
	    public  Training findByTrainingIdAnduserId(@PathVariable(value = "userId") Integer userId,
	            @PathVariable(value = "trainingId") Integer trainingId) {
	        return trainerService.findByTrainingIdAndMentorId(userId, trainingId);
	    }
	   
	    @GetMapping("/findTrainingBystartDateBetween/{startDate}/{endDate}")
	    public List<Training> findTrainingBystartDateBetween(@PathVariable(value="startDate") String startDate, @PathVariable(value="endDate") String endDate) {
	    	SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
	    	Date dateStartDate1;
			try {
				dateStartDate1 = simpleDateFormat.parse(startDate);
			} catch (ParseException e) {
				dateStartDate1=new Date();
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    	Date dateStartDate2;
			try {
				dateStartDate2 = simpleDateFormat.parse(endDate);
			} catch (ParseException e) {
				dateStartDate2=new Date();
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    	
	    	return trainerService.findTrainingBystartDateBetween(dateStartDate1, dateStartDate2);
	    }

	    @GetMapping(path = "/{userid}/{trainingid}")
	    public Training addusertotrain(@PathVariable("userid") int id,
	    		@PathVariable("trainingid") int trainingid){
	    	Training training =trainerService.findById(trainingid);
	    	UserEntity user=userService.findById(trainingid);
	    	training.getUsers().add(user);
	        return trainerService.create(training);
	    }

	    @GetMapping(path="/ChangeCommission/{commission}/{trainingId}")
	    public Training ChangeCommission(@PathVariable(value = "commission") Integer commission,
	    		@PathVariable(value = "trainingId") Integer trainingId){
		 
		 		Training training=trainerService.findById(trainingId);
		 		training.setCommissionPercent(commission);
		 		 
		 		return trainerService.create(training);
	    }

	   
	   
}
