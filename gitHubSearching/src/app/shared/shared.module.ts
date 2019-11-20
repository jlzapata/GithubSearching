import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillPipe } from './fill.pipe';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './github-api.service';
import { MapTransformationPipe } from './map-transformation.pipe';



@NgModule({
  declarations: [FillPipe, MapTransformationPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [FillPipe, MapTransformationPipe],
  providers: [GithubApiService]
})
export class SharedModule { }
