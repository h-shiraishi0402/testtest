import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { RecruitpageComponent } from './recruitpage/recruitpage.component';
import { GroupComponent } from './group/group.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductDetails2Component } from './product-details2/product-details2.component';
import { ProductDetails3Component } from './product-details3/product-details3.component';
import { ProductDetails4Component } from './product-details4/product-details4.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'aaaaaa', component: RecruitpageComponent },
  { path: 'rec', component: GroupComponent },
  { path: 'Company', component: CompanyProfileComponent },
  { path: 'inq', component: InquiryComponent },
  { path: 'product0', component: ProductDetailsComponent },
  { path: 'product2', component: ProductDetails2Component },
  { path: 'product3', component: ProductDetails3Component },
  { path: 'product4', component: ProductDetails4Component }

  // { path: 'detail', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
