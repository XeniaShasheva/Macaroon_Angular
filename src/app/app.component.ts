import { Component } from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public advantages =[
   {
     point:1,
     title:'Лучшие продукты',
     description:'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители'
   },
   {
     point:2,
     title:'Много вкусов',
     description:'Наша задача - предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
   },
   {
     point:3,
     title:'Бисквитное тесто',
     description:'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 85,5%. В составе нет маргарина и дрожей.'
   },
   {
     point:4,
     title:'Честный продукт',
     description:'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соотвествии, которую мы получили 22.06.2016г.'
   }
 ];

  public products = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      price: '1 шт. 1,70руб'
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      price: '1 шт. 1,70руб'
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      price: '1 шт. 1,70руб'
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      price: '1 шт. 1,70руб'
    },
  ];

  public formValue = {
    productTitle:'',
    name:'',
    phone:''
  }

  public scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"});
  }
  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValue.productTitle = product.title.toUpperCase();
  }

  showPresent = true;

  phone = '+375 (29) 368-98-68';

  public instagram = {
    image:'insta.png',
    description:'Мы в Instagram'
  }

}
