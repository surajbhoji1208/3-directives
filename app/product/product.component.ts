import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  product = [
    { img: 'https://images.hindustantimes.com/tech/img/2023/01/21/960x540/3_1646105722201_1674280610588_1674280610588.jpg', name: 'Apple Iphone 12', available: 'Available', price: 102, color: 'Blue' },
    { img: 'https://images.hindustantimes.com/tech/img/2023/01/21/960x540/3_1646105722201_1674280610588_1674280610588.jpg', name: 'Apple Iphone 12', available: 'Available', price: 102, color: 'Blue' },
    { img: 'https://images.hindustantimes.com/tech/img/2023/01/21/960x540/3_1646105722201_1674280610588_1674280610588.jpg', name: 'Apple Iphone 12', available: 'Available', price: 102, color: 'Blue' }
  
  ]

  ngOnInit(): void {
  }

}
