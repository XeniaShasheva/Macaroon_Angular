import { Component, Input } from '@angular/core';

import { AdvantagesType } from 'src/app/types/advantages.type';


@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
  
})
export class AdvantagesComponent {
@Input() advantage: AdvantagesType;

  constructor () {
    this.advantage = {
      number: 0,
      title:'',
      description:''
    }
  }

}
