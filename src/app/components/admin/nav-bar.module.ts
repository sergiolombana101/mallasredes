import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations : [NavBarComponent,PlaceholderComponent,ProductsComponent],
   imports : [CommonModule,FormsModule,ReactiveFormsModule],
   exports: [NavBarComponent,PlaceholderComponent,ProductsComponent]
})
export class NavBarModule {}