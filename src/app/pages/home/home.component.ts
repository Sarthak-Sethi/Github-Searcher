import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user : any = null
  userName: string = '';
  error = null;
  


  constructor(private githubservice: GithubService, private changedetector: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  Finduser() {
    this.githubservice.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.changedetector.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = err;
        console.log(err);
        this.changedetector.detectChanges();
      }
    )
  }
}
