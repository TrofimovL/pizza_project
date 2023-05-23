import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute) {
  }

  private subscription: Subscription | null = null;

  ngOnInit() {
    // if(this.cartService.product-card){
    //   this.formValues.productTitle = this.cartService.product-card;
    // }
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу')
      return;
    }

    if (!this.formValues.address) {
      alert('Заполните адрес')
      return;
    }

    if (!this.formValues.phone) {
      alert('Заполните телефон')
      return;
    }

    alert('Спасибо за заказ')

    this.formValues = {
      productTitle: '',
      address: '',
      phone: ''
    }
  }


}
