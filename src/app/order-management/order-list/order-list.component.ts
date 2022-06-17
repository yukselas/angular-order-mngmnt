import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Order } from '../model/order.interface';
import { OrderStatusEditComponent } from '../order-status-edit/order-status-edit.component';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList: any = []; 

  constructor(private orderService: OrderService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getOrders();

    this.orderService.onUpdated
      .subscribe(data => {
        this.getOrders();
      })
  }


  getOrders() {
   // this.orderList = [{ customerOrderNo: "deneme", departureAddress: "deneme", destinationAddress: "test", materialCode: "denemee", note: "note", quantity: 4, quantityUnit: " deneme", weight: 7, status: "siparis iptal edildi", weightUnit: "deneme" }]
    this.orderService.getAll()
    .subscribe(result=> {
      this.orderList = result;
    })
  }

  editOrder(order: Order) {
    const initialState: ModalOptions = {
      initialState: {
        order: cloneDeep(order)
      }
    };
    this.modalService.show(OrderStatusEditComponent, initialState);
  }
}
