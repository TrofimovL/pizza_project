import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public products: ProductType[] = [
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


  lateData: Promise<string> | null = null;

  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve){
      setTimeout(()=>{
        resolve('Hello')
      }, 3000)

    })
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;

    // this.products = this.products.filter(item=> item.title.toUpperCase() !== title.toUpperCase());
  }

  public createOrder() {
    if(!this.formValues.productTitle){
      alert('Заполните пиццу')
      return;
    }

    if(!this.formValues.address){
      alert('Заполните адрес')
      return;
    }

    if(!this.formValues.phone){
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
