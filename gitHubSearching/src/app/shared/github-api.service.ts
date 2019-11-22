import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Repository, Contribution } from './models';

@Injectable()
export class GithubApiService {

  private gitApiUrl = environment.gitHubUrl;
  private Authorization = `token ${environment.githubApiKey}`;
  lastSearch: Repository[];

  constructor(private httpClient: HttpClient) {

   }

   private getData<T>(queryString: string, outHeaders: HttpHeaders = null): Observable<T> {
    const url = `${this.gitApiUrl}${queryString}`;

    let headers = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json'
    });

    if (environment.githubApiKey) {
      headers = headers.append('Authorization', `token ${environment.githubApiKey}`);
    }

    return this.httpClient.get<T>(url, {headers})
    .pipe(retry(2));
   }

   getPopularRepositories(name: string, perPage: number = 6, page: number = 1): Observable<Repository[]> {
    let headers: HttpHeaders;
    if (environment.githubApiKey) {
     headers = new HttpHeaders({
       Authorization: `token ${environment.githubApiKey}`
     });
    }

    return this.getData<Repository[]>(`/search/repositories?q=${name} in:name&per_page=${perPage}&page=${page}&sort=stars&order=desc`,
    headers)
    .pipe(
      map((response: any) => {
        const repositories = response.items.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            description: repo.description,
            stars: repo.stargazers_count,
            openIssuesCount: repo.open_issues,
            url: repo.url,
            programmingLanguage: repo.language,
            owner: repo.owner.login
          };
        });
        this.lastSearch = repositories;
        return repositories;
      })
    );
   }

   getContributors(repositoryOwner: string, repositoryName: string): Observable<Contribution[]> {
    return this.getData<Contribution[]>(`/repos/${repositoryOwner}/${repositoryName}/stats/contributors`)
      .pipe(map((response: any) => {
        console.log(response);
        if (!Array.isArray(response)) {
          return [];
        }

        return response.map((contributor: any) => {
          return {
            author: {
              userName: contributor.author.login,
              avatarUrl: contributor.author.avatar_url,
              profileUrl: contributor.author.html_url
            },
            contributionsCount: contributor.total
          };
        });
      })
    );
  }
}
