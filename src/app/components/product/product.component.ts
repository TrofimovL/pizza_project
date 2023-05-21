import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy, OnInit,
  Output, SimpleChanges,
  ViewChild,
  // ViewEncapsulation
} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductComponent {

  @Input() product: ProductType = {} as ProductType;

  // @Input()
  // get product(): ProductType {
  //   return this._product
  // }
  //
  // set product(param: ProductType) {
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

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }
  //
  // ngOnInit() {
  //   console.log('ngOnInit')
  // }
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes)
  // }
  //
  // ngDoCheck() {
  //   console.log('ngDoCheck')
  // }
  //
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit')
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked')
  // }
  //
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit', this.elem)
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')
  // }
  //
  // ngOnDestroy() {
  //   console.log('ngOnDestroy')
  // }

  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.title);
  }

}
