import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { BookNowComponent } from './book-now/book-now.component';


//Services
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyOrderComponent,
    SubscriptionComponent,
    ProfileComponent,
    ContactComponent,
    BookNowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }