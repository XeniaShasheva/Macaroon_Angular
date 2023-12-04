import { Injectable } from '@angular/core';
import { AdvantagesType } from 'src/app/types/advantages.type';

@Injectable({
  providedIn: 'root'
})
export class AdvantagesService {

  constructor () {}
  getAdvantages(): AdvantagesType[] {
    return [
      {
        number: 1,
        title:'Лучшие продукты',
        description:'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
      },
      {
        number: 2,
        title:'Много вкусов',
        description:'Наша задача - предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
      },
      {
        number: 3,
        title:'Бисквитное тесто',
        description:'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 85,5%. В составе нет маргарина и дрожей.'
      },
      {
        number: 4,
        title:'Честный продукт',
        description:'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соотвествии, которую мы получили 22.06.2016г.'
      },
     
    ]
  }
}
