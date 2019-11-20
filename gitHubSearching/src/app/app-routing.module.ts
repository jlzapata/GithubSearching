import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoSearchComponent } from './repo-search/repo-search.component';


const routes: Routes = [
  {path: 'Search', component: RepoSearchComponent},
  {path: '**', redirectTo: 'Search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
