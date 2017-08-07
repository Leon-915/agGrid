import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sub-header',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.sass']
})
export class SubHeaderComponent implements OnInit {
  title = '';
  location = '';
  constructor() { }

  ngOnInit() {
    this.title = 'title';
    this.location = 'home&gt;mfl&gt;injuries';
  }

}