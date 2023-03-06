import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginPageComponent } from './template/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './template/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './template/account/signup-page/signup-page.component';
import { PetsPageComponent } from './template/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './template/store/products-page/products-page.component';
import { CartPageComponent } from './template/store/cart-page/cart-page.component';
import { FramePageComponent } from './template/master/frame.page';
import { ProductCardComponent } from './componentes/product-card/product-card.component'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
