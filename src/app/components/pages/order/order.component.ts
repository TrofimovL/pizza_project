import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // if(this.cartService.product-card){
    //   this.formValues.productTitle = this.cartService.product-card;
    // }

    const productParam = this.activatedRoute.snapshot.queryParamMap.get('product')

    if (productParam) {
      this.formValues.productTitle = productParam
    }


    // this.activatedRoute.queryParams.subscribe((params)=>{
    //   if(params['product-card']){
    //     this.formValues.productTitle = params['product-card'];
    //   }
    // })
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