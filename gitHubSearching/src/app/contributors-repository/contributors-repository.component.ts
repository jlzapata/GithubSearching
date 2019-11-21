import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';
import { Contribution } from '../shared/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nggit-contributors-repository',
  templateUrl: './contributors-repository.component.html',
  styleUrls: ['./contributors-repository.component.scss']
})
export class ContributorsRepositoryComponent implements OnInit {

  partialContributors: Contribution[];
  repositoryName: string;
  canLoadMore: boolean;
  private contributors: Contribution[];
  private page = 1;
  private perPage = 5;

  constructor(private route: ActivatedRoute) {
    console.log(route);
    this.route.data.subscribe({
      next: (data: any) => {
        this.contributors = data.contributors.reverse();
        this.partialContributors = this.contributors.slice(0, 10);
        this.canLoadMore = this.contributors.length > 10;
      }
    });
    this.route.params.subscribe(data => this.repositoryName = data.repo);
  }

  ngOnInit() {
    console.log(this.contributors.length);
  }

  loadMore() {
    ++this.page;
    const startIndex = this.page * this.perPage;
    const endIndex = startIndex + this.perPage <= this.contributors.length ?
      startIndex + this.perPage : this.contributors.length - startIndex;

    this.partialContributors.push(...this.contributors.slice(startIndex, endIndex));

    if (endIndex === this.contributors.length) {
      this.canLoadMore = false;
    }
  }

}
