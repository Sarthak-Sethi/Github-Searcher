import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http : HttpClient) { }


getUserDetails(user : string){
  return this.http.get(`https://api.github.com/users/${user}`);
}

getRepos(repoUrl:string){
return this.http.get(repoUrl);
}
}
