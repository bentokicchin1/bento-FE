import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  data;
  orderForm:FormGroup;
  message: {type:string,text:string};
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      sabji:[''],
      chapati:[''],
      milk:[''],
      rice:[''],
      dal:['']
    });
  }

  order(){
    this.data = this.orderForm.value;
    console.log(this.data);
  }

}
