import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';
import { ButtonDirective } from './directives/button.directive';
import { AdvantagesDescriptionPipe } from './pipes/advantages-description.pipe';
import { PhoneDescriptionPipe } from './pipes/phone-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductComponent,
    ButtonDirective,
    AdvantagesDescriptionPipe,
    PhoneDescriptionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
