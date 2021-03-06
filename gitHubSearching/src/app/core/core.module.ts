import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './../app-routing.module';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
