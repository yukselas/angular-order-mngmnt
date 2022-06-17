import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Order } from '../model/order.interface';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-status-edit',
  templateUrl: './order-status-edit.component.html',
  styleUrls: ['./order-status-edit.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OrderStatusEditComponent implements OnInit {
  statuses: string[] = []
  order:Order={}
  constructor(public bsModalRef: BsModalRef, private orderService:OrderService) { }

  ngOnInit(): void {
    this.statuses = ["siparis alindi", "siparis teslim edildi", "siparis iptal edildi"]
  }

  edit(){
    console.log(this.order)
    // TODO Success kontrolu eklenicek
    this.bsModalRef.hide()
this.orderService.edit(this.order)
.subscribe(result => {
  console.log(result)
})
  }

}
