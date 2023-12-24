import { Component } from '@angular/core';
import { StoreData } from '../../../viewModels/store-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  storeInfo!:StoreData

  constructor() {
    this.storeInfo=new StoreData('iti store','https://picsum.photos/400/440',4,['alex','cairo','mansoura'])
    
  }
}
