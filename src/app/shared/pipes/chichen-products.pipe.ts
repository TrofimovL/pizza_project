import { Pipe, PipeTransform } from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Pipe({
  name: 'chichenProducts'
})
export class ChichenProductsPipe implements PipeTransform {

  transform(products: ProductType[]): ProductType[] {
    return products.filter(item=> item.title.toLowerCase().includes('кур'));
  }

}
