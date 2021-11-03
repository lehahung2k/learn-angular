import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
