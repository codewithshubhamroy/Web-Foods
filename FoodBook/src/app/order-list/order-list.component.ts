import { Component } from '@angular/core';
import {ServiceService} from '../service.service';
import{PaymentServiceService} from '../order-list/payment-service.service'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  data:any;
  constructor(private order : ServiceService){
    order.getAllData().subscribe(res=>{
      this.data=res;
    })
  }

  // paymentData:any;
  // constructor(private payment : PaymentServiceService){}

  ngOnInt():void{
    // this.order.getAllData().subscribe((data) =>{
    //   console.log("OrderList");
    // })
  }



  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

}
