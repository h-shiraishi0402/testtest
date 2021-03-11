// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AppRoutingModule],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GroupComponent } from './group/group.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { ProductDetails2Component } from './product-details2/product-details2.component';
import { ProductDetails3Component } from './product-details3/product-details3.component';
import { ProductDetails4Component } from './product-details4/product-details4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GroupComponent,
    CompanyProfileComponent,
    InquiryComponent,
    ProductDetails2Component,
    ProductDetails3Component,
    ProductDetails4Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
