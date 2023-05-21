import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  constructor() { }


  getProducts():ProductType[]{
// ajax

    return [
      {
        image: 'p1.png',
        title: 'Мясная Делюкс',
        description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
        datetime: '2022-12-31 15:00:00',
      },
      {
        image: '',
        title: 'Морская Премиум',
        description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
        datetime: '2012-12-31 15:00:00',
      },
      {
        image: 'p3.png',
        title: 'Бекон и Сосиски',
        description: 'Бекон, сыр, сосиски, ананас, томатная паста',
        datetime: '2002-12-31 15:00:00',
      },
      {
        image: 'p4.png',
        title: 'Куриная Делюкс',
        description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
        datetime: '1992-12-31 15:00:00',
      },
      {
        image: 'p5.png',
        title: 'Барбекю Премиум',
        description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
        datetime: '1982-12-31 15:00:00',
      },
      {
        image: 'p6.png',
        title: 'Пепперони Дабл',
        description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
        datetime: '1972-12-31 15:00:00',
      },
      {
        image: 'p7.png',
        title: 'Куриное трио',
        description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
        datetime: '1962-12-31 15:00:00',
      },
      {
        image: 'p8.png',
        title: 'Сырная',
        description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
        datetime: '1952-12-31 15:00:00',
      },
    ]
  }
}
