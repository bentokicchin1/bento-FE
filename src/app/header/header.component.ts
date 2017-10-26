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
    // localStorage.clear();
    if(data && data){
      console.log(JSON.stringify(data) + ' Inside If');
    }
    console.log(JSON.stringify(data) + ' Outside');
  }

}
