import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusEditComponent } from './order-status-edit.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderStatusEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [OrderStatusEditComponent]
})
export class OrderStatusEditModule { }
