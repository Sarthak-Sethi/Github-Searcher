import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any = null;
  constructor(
    private authservice : AuthService,
    private router : Router,
    private toast:ToastrService

  ) { 
    authservice.getUser().subscribe(
      (user) => {
        this.email = user?.email;
      }
    );
  }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try {
      this.email = 'no email yet';
      const res = await this.authservice.signOut();
      this.router.navigateByUrl('/signIn');
      this.toast.info('login Again to continue');
    }
    catch(error) {
      this.toast.error("Something went wrong");
    }
  }

}
