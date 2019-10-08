import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { SigninuserComponent } from './signinuser/signinuser.component';
import { SigninmentorComponent } from './signinmentor/signinmentor.component';
import { SignupmentorComponent } from './signupmentor/signupmentor.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { SearchtrainingComponent } from './searchtraining/searchtraining.component';
import { CurrenttrainingComponent } from './currenttraining/currenttraining.component';
import { CompletedtrainingComponent } from './completedtraining/completedtraining.component';
import { AdminComponent } from './admin/admin.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { MentorcurrenttrainingComponent } from './mentorcurrenttraining/mentorcurrenttraining.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { MentorpaymentComponent } from './mentorpayment/mentorpayment.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { MentornotificationComponent } from './mentornotification/mentornotification.component';
import { UsernotificationComponent } from './usernotification/usernotification.component';
import { LeapcodeComponent } from './leapcode/leapcode.component';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { VerifytechComponent } from './verifytech/verifytech.component';
import { VerifymentorComponent } from './verifymentor/verifymentor.component';
import { VerifypaymentComponent } from './verifypayment/verifypayment.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { MentorPayService } from './mentorpayment/mentorpayment.service';
import { verifytechService } from './verifytech/verifytech.service';
import { signupuserService } from './signupuser/signupuser.service';
import { signupmentorService } from './signupmentor/signupmentor.service';
import { signinuserService } from './signinuser/signinuser.service';
import { signinmentorService } from './signinmentor/signinmentor.service';
import { verifyuserService } from './verifyuser/verifyuser.service';
import{FormsModule} from '@angular/forms';
import { adminService } from './admin/admin.service';
import { currenttrainingService } from './currenttraining/currenttraining.service';
import { mentorcurrenttrainingService } from './mentorcurrenttraining/mentorcurrenttraining.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { editskillsService } from './editskills/editskills.service';
import { searchtrainingService } from './searchtraining/searchtraining.service';
import { completedtrainingService } from './completedtraining/completedtraining.service';
import { verifymentorService } from './verifymentor/verifymentor.service';
import { userProfileService } from './userprofile/userprofile.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VerifypaymentService } from './verifypayment/verifypayment.service';

import { mentorService } from './mentormenu/mentormenu.service';
import { userPayService } from './userpayment/userpayment.service';
import { UserpaymentComponent } from './userpayment/userpayment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupuserComponent,
    SigninuserComponent,
    SigninmentorComponent,
    SignupmentorComponent,
    UsermenuComponent,
    SearchtrainingComponent,
    CurrenttrainingComponent,
    CompletedtrainingComponent,
    AdminComponent,
    MentormenuComponent,
    MentorcurrenttrainingComponent,
    EditskillsComponent,
    MentorpaymentComponent,
    AdminmenuComponent,
    MentornotificationComponent,
    UsernotificationComponent,
    LeapcodeComponent,
    VerifyuserComponent,
    VerifytechComponent,
    VerifymentorComponent,
    VerifypaymentComponent,
    ContactComponent,
    CoursesComponent,
    UserprofileComponent,
    UserpaymentComponent
    
  ],

  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleColor: '#444444',
    }),
    NgbModule
  ],
 
  providers: [MentorPayService,verifytechService,signupuserService,signupmentorService,signinuserService,signinmentorService,adminService,verifyuserService,currenttrainingService,mentorcurrenttrainingService,editskillsService,searchtrainingService,completedtrainingService,verifymentorService,userProfileService,VerifypaymentService,mentorService,userPayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NgbdRatingConfigModule {}
