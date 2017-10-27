import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('currentUser'));
    if (data && data != "undefined" && data != "null") {
      console.log(data.firstName + ' Parse');
    }
  }

}
