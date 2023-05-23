import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService,
              // private cartService: CartService,
              // private router: Router
  ) {
    console.log(111)
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public products: ProductType[] = [];

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title;
  //
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }
}
