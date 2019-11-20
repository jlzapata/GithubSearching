import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GithubApiService } from '../shared/github-api.service';
import { debounce, map, switchMap } from 'rxjs/operators';
import { fromEvent, EMPTY, empty, Subscription, timer } from 'rxjs';
import { Repository } from '../shared/models';

@Component({
  selector: 'nggit-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.scss']
})
export class RepoSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  faSearch = faSearch;
  repositories: Repository[];
  firstSearch = false;
  loading = false;

  @ViewChild('searchInput', {static: true}) searchInput: ElementRef<HTMLInputElement>;

  private subscriptions: Subscription[] = [];

  constructor(private githubService: GithubApiService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounce((ev: KeyboardEvent) => {
          if (ev.key === 'Enter') {
            return EMPTY;
          } else {
            return timer(500);
          }
        }),
        switchMap(_ => {
          if (this.searchInput.nativeElement.value.length > 0) {
            this.loading = true;
            if (!this.firstSearch) {
              this.firstSearch = true;
            }

            return this.githubService.getPopularRepositories(this.searchInput.nativeElement.value);
          } else {
            return EMPTY;
          }
      }))
      .subscribe(repositories => {
        console.log(repositories);
        this.repositories = repositories;
        this.loading = false;
      })
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
