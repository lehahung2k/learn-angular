import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'create', component: AddProductComponent},
  {path: 'view/:id', component: ViewProductComponent},
  {path: 'list', component: ListProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'delete/:id', component: DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
