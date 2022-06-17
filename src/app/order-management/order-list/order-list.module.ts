import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { OrderListRoutingModule } from './order-list-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OrderStatusEditModule } from '../order-status-edit/order-status-edit.module';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    OrderStatusEditModule
  ]
})
export class OrderListModule { }
