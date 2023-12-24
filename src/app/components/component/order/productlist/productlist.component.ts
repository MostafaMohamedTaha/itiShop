import { Component } from '@angular/core';
import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productList!:IProduct[]
  constructor(){
    this.productList=[
      {id:1,name:'p1',price:100,quantity:4,imgUrl:'https://picsum.photos/600/600',catId:1},
      {id:2,name:'p2',price:110,quantity:5,imgUrl:'https://picsum.photos/600/610',catId:2},
      {id:3,name:'p3',price:120,quantity:6,imgUrl:'https://picsum.photos/600/620',catId:3},
      {id:4,name:'p4',price:130,quantity:7,imgUrl:'https://picsum.photos/600/630',catId:4},
      {id:5,name:'p5',price:140,quantity:8,imgUrl:'https://picsum.photos/600/640',catId:5},
      {id:6,name:'p6',price:150,quantity:9,imgUrl:'https://picsum.photos/600/650',catId:6}
    ]
  }
}
