import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nggit-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.scss']
})
export class RepoSearchComponent implements OnInit {
  faSearch = faSearch;

  constructor() {
  }

  ngOnInit() {
  }

}
