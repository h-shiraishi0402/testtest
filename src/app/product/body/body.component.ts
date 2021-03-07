import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  products: any = [1, 2, 3, 4];

  constructor() {}
  ngOnInit() {
    this.products = products;
  }
}
