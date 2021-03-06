import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CoreModule } from './core/core.module';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { RepositoryComponent } from './repository/repository.component';
import { SharedModule } from './shared/shared.module';
import { ContributorsRepositoryComponent } from './contributors-repository/contributors-repository.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContributorComponent } from './contributor/contributor.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoSearchComponent,
    RepositoryComponent,
    ContributorsRepositoryComponent,
    ContributorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(faGithub, faSearch);
  }

}
