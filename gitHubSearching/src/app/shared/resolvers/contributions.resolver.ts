import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Contribution } from '../models';
import { GithubApiService } from '../github-api.service';

@Injectable()
export class ContributionsResolver implements Resolve<Contribution[]> {

  constructor(private gitHubService: GithubApiService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Contribution[] | Observable<Contribution[]> | Promise<Contribution[]> {
    const owner = route.params['owner'];
    const repo = route.params['repo'];

    return this.gitHubService.getContributors(owner, repo);
  }
}
