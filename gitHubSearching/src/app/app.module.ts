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

@NgModule({
  declarations: [
    AppComponent,
    RepoSearchComponent,
    RepositoryComponent,
    ContributorsRepositoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(faGithub, faSearch);
  }

}
