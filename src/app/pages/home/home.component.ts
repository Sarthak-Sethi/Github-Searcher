import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user : user = new user();
  userName: string = '';
  error = null;


  constructor(private githubservice: GithubService, private changedetector: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  Finduser() {
    this.githubservice.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = this.user;
        this.error = null;
        this.changedetector.detectChanges();
      },
      (err) => {
        this.user = new user;
        this.error = err;
        console.log(err);
        this.changedetector.detectChanges();
      }
    )
  }
}
