import { Component, OnInit } from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantagesType} from "./types/advantages.type";
import {FormValueType} from "./types/form-value.type";
import {InstagrammType} from "./types/instagramm.type";
import { AdvantagesService } from './services/advantages.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 public advantages: AdvantagesType [] =[];

constructor(
  public advantage: AdvantagesService, 
  public product: ProductService, 
  public cartService: CartService) {

}



  public products: ProductType[] = [];
ngOnInit(): void {
  this.advantages = this.advantage.getAdvantages();
  this. products = this.product.getProducts();
}
  public formValue: FormValueType = {
    productTitle:'',
    name:'',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }
  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValue.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.allPrice = this.cartService.allPrice + product.price;
    alert(product.title + " добавлен в корзину!" );
  }

  showPresent: boolean = true;

  phone = '+375293689868';
  public instagram: InstagrammType = {
    image:'insta.png',
    description:'Мы в Instagram'
  }

  public createOrder() {
    if(!this.formValue.productTitle) {
      alert('Выберите макарун!');
      return;
    }
    if(!this.formValue.name) {
      alert('Заполните имя!');
      return;
    }
    if(!this.formValue.phone) {
      alert('Заполните номер телефона!');
      return;
    }
    alert('Спасибо за заказ!');
    this.formValue = {
      productTitle:'',
      name:'',
      phone: ''
    }
  };


}
