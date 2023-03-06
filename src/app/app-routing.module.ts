import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './template/account/login-page/login-page.component';
import { PetsPageComponent } from './template/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './template/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './template/account/signup-page/signup-page.component';
import { FramePageComponent } from './template/master/frame.page';
import { CartPageComponent } from './template/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './template/store/products-page/products-page.component';

const routes: Routes = [
  {  path: '', component:  FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent },
      { path: 'cart', component: CartPageComponent }
    ]
  },
  {
    path: 'account', component: FramePageComponent,
    children: [
      { path: 'pets', component: PetsPageComponent }
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
