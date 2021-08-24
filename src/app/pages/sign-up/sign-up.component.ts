import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private toastr : ToastrService,private route : Router,private authservice : AuthService) {

   }

  ngOnInit(): void {
  }
   onSubmit(form: NgForm){
     const {email,password} = form.form.value;
    this.authservice.signUp(email,password).then(
      (res)=>{
        this.route.navigateByUrl('/');
        this.toastr.success("Authentication Sucess");
      }).catch(
        (err)=> {
          this.toastr.error("Auth Failure");
        })
   }

}
