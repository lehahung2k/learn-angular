import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  constructor(private productService: ProductsService, public router: Router) { }

  public formModel:any={
    pname:"",
    pprice:"",
    productimg:""
  };

  ngOnInit(): void { }

  createProduct() {
    this.productService.addProduct(this.formModel).subscribe(data => {
      alert("Add Success!");
      this.router.navigate(["list"])
    }, err => { 
      console.log('Add Failed!');
      this.router.navigate(["create"])
    });
  }

}
