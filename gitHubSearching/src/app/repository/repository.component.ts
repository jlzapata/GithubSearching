import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../shared/models';

@Component({
  selector: 'nggit-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() repository: Repository;
  constructor() { }

  ngOnInit() {
  }



}
