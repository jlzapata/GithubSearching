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

  constructor(private httpClient: HttpClient) {

   }

   private getData<T>(queryString: string): Observable<T> {
    const url = `${this.gitApiUrl}${queryString}`;

    const headers = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json'
    });

    return this.httpClient.get<T>(url, {headers})
    .pipe(retry(2));
   }

   getPopularRepositories(name: string, perPage: number = 6, page: number = 1): Observable<Repository[]> {
    return this.getData<Repository[]>(`/search/repositories?q=${name} in:name&per_page=${perPage}&page=${page}&sort=stars&order=desc`)
    .pipe(
      map((response: any) => {
        return response.items.map(repo => {
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
      })
    );
   }

   getContributors(repositoryOwner: string, repositoryName: string): Observable<Contribution[]> {
    return this.getData<Contribution[]>(`/repos/${repositoryOwner}/${repositoryName}/stats/contributors`)
      .pipe(map((response: any) => {
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
