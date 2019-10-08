import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { UsernotificationComponent } from './usernotification/usernotification.component';
import { MentornotificationComponent } from './mentornotification/mentornotification.component';
import { LeapcodeComponent } from './leapcode/leapcode.component';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { VerifytechComponent } from './verifytech/verifytech.component';
import { VerifymentorComponent } from './verifymentor/verifymentor.component';
import { VerifypaymentComponent } from './verifypayment/verifypayment.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserpaymentComponent } from './userpayment/userpayment.component';
const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch:'full'},
{path: 'home', component:HomeComponent},
{path: 'signupuser', component:SignupuserComponent},
{path: 'signinuser', component:SigninuserComponent},
{path: 'signinmentor', component:SigninmentorComponent},
{path: 'signupmentor', component:SignupmentorComponent},
{path: 'usermenu', component:UsermenuComponent},
{path: 'searchtraining', component:SearchtrainingComponent},
{path: 'currenttraining', component:CurrenttrainingComponent},
{path: 'userpayment', component:CompletedtrainingComponent},
{path: 'signinadmin', component:AdminComponent},
{path: 'mentormenu', component:MentormenuComponent},
{path: 'mentorcurrenttraining', component:MentorcurrenttrainingComponent},
{path: 'editskills', component:EditskillsComponent},
{path: 'mentorpayment', component:MentorpaymentComponent},
{path: 'adminmenu', component:AdminmenuComponent},
{path: 'mentornotification', component:MentornotificationComponent},
{path: 'usernotification', component:UsernotificationComponent},
{path: 'leapcode', component:LeapcodeComponent},
{path: 'verifyuser', component:VerifyuserComponent},
{path: 'verifytech', component:VerifytechComponent},
{path: 'verifymentor', component:VerifymentorComponent},
{path: 'verifypayment', component:VerifypaymentComponent},
{path: 'contact', component:ContactComponent},
{path: 'courses', component:CoursesComponent},
{path: 'userprofile', component:UserprofileComponent},
{path: 'userpayments', component:UserpaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
