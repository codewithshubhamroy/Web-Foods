import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-order-info',
  templateUrl: './view-order-info.component.html',
  styleUrls: ['./view-order-info.component.css']
})
export class ViewOrderInfoComponent {

  ngOnInit(){
    this.getDate();
  }

  orderDel=new FormGroup({
    contactname:new FormControl('', [Validators.required]),
    orderDate:new FormControl('', [Validators.required]),
    totalTax:new FormControl('', [Validators.required]),
    grantTotalTax:new FormControl('', [Validators.required])
  })

 get contactname(){
    return this.orderDel.get('contactname');
  }
  get orderDate(){
    return this.orderDel.get('orderDate');
  }
  get totalTax(){
    return this.orderDel.get('totalTax');
  }
  get grandTotalTax(){
    return this.orderDel.get('grandTotalTax');
  }




  order(){
    return console.log(this.orderDel.value);
  }

  
  // currentDate:any = new Date();
  // selectedMatDate!:  Date;
  // ordinaryDateSelected!: Date;
  minDate: any='';
  getDate(){
    var date = new Date();
    var toDate:any = date.getDate();
    if(toDate<10){
      toDate = '0'+toDate;
    }
    var month:any=date.getMonth()+1;
    if(month<10){
      month = '0'+month;
    }
    var year=date.getFullYear();
    this.minDate=year + "-" + month + "-" + toDate;
    console.log(this.minDate);
  }

}
