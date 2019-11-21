import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillPipe } from './fill.pipe';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './github-api.service';
import { MapTransformationPipe } from './map-transformation.pipe';
import { ContributionsResolver } from './resolvers/contributions.resolver';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [FillPipe, MapTransformationPipe, ErrorComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [FillPipe, MapTransformationPipe, ErrorComponent],
  providers: [GithubApiService, ContributionsResolver]
})
export class SharedModule { }
