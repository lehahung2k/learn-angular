import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
