import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  listProducts: any;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
      this.productService.listProducts().subscribe(data => {
      this.listProducts = data;
    });
  }

}
