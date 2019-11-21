import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { ContributorsRepositoryComponent } from './contributors-repository/contributors-repository.component';
import { ContributionsResolver } from './shared/resolvers/contributions.resolver';


const routes: Routes = [
  {path: 'Search', component: RepoSearchComponent, data: {animation: 'searchPage'}},
  {path: 'Repository/:owner/:repo/Contributors',
    component: ContributorsRepositoryComponent,
    resolve: {contributors: ContributionsResolver},
    data: {animation: 'contributorsPage'}
  },
  {path: '**', redirectTo: 'Search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
