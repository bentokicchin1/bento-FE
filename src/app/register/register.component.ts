import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Router} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { UserService} from '../_services/user.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: { [key: string]: string } = {};
  userData;

  private validationMessages = {
    firstName: {
      required: 'Please enter your first name.'
    },
    mobile: {
      required: 'Please enter your mobile number.',
      number: 'Mobile number must be numeric.',
      minlength: 'The mobile number must be 10 digit number.',
      maxlength: 'The mobile number must be 10 digit number.'
    },
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.'
    },
    password: {
      required: 'Please enter your last name.',
      minlength: 'The password must be longer than 6 characters.'
    },
    confirmPassword: {
      required: 'Please enter your password.',
      notequal: 'Confirm password did not match with above password.'
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['']
      }, {validator: this.passwordMatcher})      
    });

    const fNameControl = this.registerForm.get('firstName');
    fNameControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setErrorMessage(fNameControl, 'firstName'));

    const mobileControl = this.registerForm.get('mobile');
    mobileControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setErrorMessage(mobileControl, 'mobile'));

    const emailControl = this.registerForm.get('email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setErrorMessage(emailControl, 'email'));

    const passwordControl = this.registerForm.get('passwordGroup.password');
    passwordControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setErrorMessage(passwordControl, 'password'));

    const confirmPasswordControl = this.registerForm.get('passwordGroup');
    confirmPasswordControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setErrorMessage(confirmPasswordControl, 'confirmPassword'));

  }
  // Set error message
  setErrorMessage(c: AbstractControl, controlName): void {
    console.log(c.errors);
    this.errorMessage[controlName] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.errorMessage[controlName] = Object.keys(c.errors).map(key =>
        this.validationMessages[controlName][key]).join(' ');
    }
  }
  // Validate confirm email address
  passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
    let passControl = c.get('password');
    let confirmPassControl = c.get('confirmPassword');

    if (passControl.pristine || confirmPassControl.pristine) {
      return null;
    }

    if (passControl.value === confirmPassControl.value) {
        return null;
    }
    return { 'notequal': true };
 }

  // register(): void {
  //   console.log((this.registerForm.value));
  //   console.log(JSON.stringify(this.registerForm.value));

  // }

  register() {
    // this.loading = true;
    this.userData = this.registerForm.value;
    this.userService.create(this.userData)
        .subscribe(
            data => {
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                // this.alertService.error(error);
                // this.loading = false;
            });
            console.log(this.userService);
}

}
