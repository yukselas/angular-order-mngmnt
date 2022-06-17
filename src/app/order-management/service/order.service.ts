import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Order } from "../model/order.interface";

@Injectable({ providedIn: 'root' })
export class OrderService {
    onUpdated: EventEmitter<any> = new EventEmitter<any>()

    constructor(private httpClient: HttpClient) { }

    getAll() {
        return this.httpClient.get(`${environment.apiUrl}/Siparis`)
    }

    edit(order: Order) {
        return this.httpClient.put(`${environment.apiUrl}/Siparis`, order)
        .pipe(tap((result: any)=> {
            if (result) {
                this.onUpdated.emit(result)
            }
        }))
    }
}