import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'nggit-contributors-repository',
  templateUrl: './contributors-repository.component.html',
  styleUrls: ['./contributors-repository.component.scss']
})
export class ContributorsRepositoryComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    console.log(this.router.snapshot.params['repositoryId']);
  }

  ngOnInit() {
  }

}
