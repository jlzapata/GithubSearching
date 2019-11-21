import { Component, OnInit, Input } from '@angular/core';
import { Contribution } from '../shared/models';

@Component({
  selector: 'nggit-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {

  @Input() contributor: Contribution;

  constructor() { }

  ngOnInit() {
  }

}
