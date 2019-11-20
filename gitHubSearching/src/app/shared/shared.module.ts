import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillPipe } from './fill.pipe';
import { HttpClientModule } from '@angular/common/http';
import { GithubApiService } from './github-api.service';



@NgModule({
  declarations: [FillPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [FillPipe],
  providers: [GithubApiService]
})
export class SharedModule { }
