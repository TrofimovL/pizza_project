import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  // ViewEncapsulation
} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../../services/cart-product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  // encapsulation:ViewEncapsulation.None
  providers: [CartProductService]
})
export class ProductCardComponent {

  @Input() product: ProductType = {} as ProductType;

  // @Input()
  // get product-card(): ProductType {
  //   return this._product
  // }
  //
  // set product-card(param: ProductType) {
  //   param.title = param.title.toUpperCase();
  //   this._product = param;
  // }
  //
  // private _product: ProductType

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {

    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

  // addProductToCart() {
  //   this.cartProductService.count++;
  //   this.addToCartEvent.emit(this.titleComponent.title);
  // }

}
