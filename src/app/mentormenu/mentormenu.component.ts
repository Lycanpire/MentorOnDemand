import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mentorService } from './mentormenu.service';
import { MentorM } from './mentormenu.model';

@Component({
  selector: 'app-mentormenu',
  templateUrl: './mentormenu.component.html',
  styleUrls: ['./mentormenu.component.css']
})
export class MentormenuComponent implements OnInit {
  veruser: MentorM;
  newu:MentorM=new MentorM();

  constructor(private router: Router, private userService: mentorService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.newu = data;
      });
  };

}
