import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit,OnChanges {

  @Input()
  repoUrl :string ='';
  repos:any =[];

  constructor(private githubservice : GithubService,private changedetref : ChangeDetectorRef) { }
  ngOnChanges() {
  if(this.repoUrl){
    this.githubservice.getRepos(this.repoUrl).subscribe(
      (repos)=> {
        this.repos = repos;
        this.changedetref.detectChanges();
      },
      (err) => {
        console.log(err);
        
      }
    )
  }
  }

  ngOnInit(): void {
    
  }

}
