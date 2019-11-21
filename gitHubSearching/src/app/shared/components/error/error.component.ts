import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nggit-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
