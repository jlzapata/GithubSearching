import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from './models';

@Injectable()
export class GithubApiService {

  private gitApiUrl = environment.gitHubUrl;

  constructor(private httpClient: HttpClient) {

   }

   private getData<T>(queryString: string): Observable<T> {
    const url = `${this.gitApiUrl}${queryString}`;

    const headers = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json'
    });

    return this.httpClient.get<T>(url, {headers, observe: 'response'})
    .pipe(map(response => {
      console.log(response);
      console.log(response.headers.get('X-RateLimit-Limit'));
      return response.body;
    }));
   }

   getPopularRepositories(name: string, perPage: number = 6, page: number = 1): Observable<Repository[]> {
    console.log('request started.....................');
    return this.getData<Repository[]>(`/search/repositories?q=${name} in:name&per_page=${perPage}&page=${page}&sort=stars&order=desc`)
    .pipe(
      map((response: any) => {
        return response.items.map(repo => {
          return {
            name: repo.full_name,
            description: repo.description,
            stars: repo.stargazers_count,
            openIssuesCount: repo.open_issues,
            url: repo.url,
            programmingLanguage: repo.language
          };
        });
      }));
   }


}
