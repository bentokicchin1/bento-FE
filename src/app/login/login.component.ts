import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { UserModel} from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { GlobalErrorHandler } from '../_services/globalerrorhandler.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userData: UserModel; 
  message: {type:string, text:string};
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authentication: AuthenticationService,
    private globalError: GlobalErrorHandler
   ) { }

  ngOnInit(): void {

    this.authentication.logout();

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {

    this.userData = (this.loginForm.value);
    this.authentication.login(this.userData)
    .subscribe(
      data => {
        this.message = {"type":"success", 'text':'Login successful'};
        this.router.navigate(['/home']);
      },
      error => {
        // this.globalError.handleError(error);
        this.message = {'type':"error", 'text': <any>this.globalError.handleError(error)};
      }
    );

  }

}
