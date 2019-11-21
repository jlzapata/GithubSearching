import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { ContributorsRepositoryComponent } from './contributors-repository/contributors-repository.component';


const routes: Routes = [
  {path: 'Search', component: RepoSearchComponent},
  {path: 'Repository/:repositoryId/Contributors', component: ContributorsRepositoryComponent},
  {path: '**', redirectTo: 'Search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
