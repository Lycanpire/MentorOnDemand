import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { editskillsService } from './editskills.service';
import { EditSkillsM } from './editskills.model';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent {
  
  editskill: EditSkillsM[];
  news:EditSkillsM=new EditSkillsM();
  constructor(private router:Router,private editskills:editskillsService ){

  }
  ngOnInit() {
    this.editskills.getUsers()
      .subscribe( data => {
        this.editskill = data;
      });
  };
  
  deleteUser(tech: EditSkillsM): void {
    this.editskills.deleteUser(tech)
      .subscribe( data => {
        this.editskill= this.editskill.filter(u => u !== tech);
      })
  };
  createUser(): void {
    this.editskills.createUser(this.news)
        .subscribe( data => {
          alert("Skills Added successfully.");
        });
  
  };

 

}
