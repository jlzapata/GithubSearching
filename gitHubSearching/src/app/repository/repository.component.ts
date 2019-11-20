import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../shared/models';
import { faStar, faCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { LANGUAGECOLORCOLLECTION } from '../shared/language-color-relation';

@Component({
  selector: 'nggit-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  faStar = faStar;
  faCircle = faCircle;
  faExclamationTriangle = faExclamationTriangle;

  readonly languageColorCollection = LANGUAGECOLORCOLLECTION;

  @Input() repository: Repository;

  constructor() { }

  ngOnInit() {
  }



}
