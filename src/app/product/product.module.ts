import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: BodyComponent },
      { path: ':productId', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [ProductDetailsComponent, BodyComponent, ProductComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [],
  bootstrap: []
})
export class ProductModule {}
