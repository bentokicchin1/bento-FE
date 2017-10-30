import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginSession:boolean=false;
  constructor() { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('currentUser'));
    console.log(data + ' Parse');
    // console.log(this.loginSession);
    if (data && !(data == "undefined" || data == "null")) {
        this.loginSession = true;
        console.log(this.loginSession);
    }
  }

}
