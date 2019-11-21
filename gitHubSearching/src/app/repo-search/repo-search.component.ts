import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GithubApiService } from '../shared/github-api.service';
import { debounce, map, switchMap, catchError } from 'rxjs/operators';
import { fromEvent, EMPTY, empty, Subscription, timer, of, Observable } from 'rxjs';
import { Repository } from '../shared/models';
import { enterLeaveAnimation } from '../shared/animations/enter-leave.animation';
import { fadeInAnimation } from '../shared/animations/fade-in.animation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'nggit-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.scss'],
  animations: [enterLeaveAnimation, fadeInAnimation]
})
export class RepoSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  faSearch = faSearch;
  repositories: Repository[];
  firstSearch = false;
  loading = false;
  notFound = false;
  apiRateLimitReached = false;

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
          this.notFound = false;
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
      }),
      catchError(err => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.apiRateLimitReached = true;
          }
        }

        return of([]);
      })
      )
      .subscribe({
        next: repositories => {
          this.loading = false;

          if (repositories) {
            this.repositories = repositories;
            if (this.repositories.length === 0) {
              this.notFound = !this.apiRateLimitReached;
            }
          }
        },
        error: (error: any) => {
          this.loading = false;
        },
        complete: () => this.loading = false
      })
    );
  }

  reload() {
    window.location.reload();
  }


  trackRepository(index: number, repository: Repository) {
    return repository ? repository.id : undefined;
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
