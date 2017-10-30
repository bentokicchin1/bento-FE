import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { BookNowComponent } from './book-now/book-now.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'my-orders', component: MyOrderComponent },
    { path: 'subscription', component: SubscriptionComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'breakfast', component: BookNowComponent },
    { path: 'lunch', component: BookNowComponent },
    { path: 'dinner', component: BookNowComponent },
    { path: '', component: HomeComponent },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);