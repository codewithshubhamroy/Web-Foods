import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validator, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent {

  ngOnInit(){
    this.getDate();
  }
  paymentForm=new FormGroup({
    cardNumber:new FormControl('',[Validators.required, Validators.maxLength(16)]),
    cvv:new FormControl('', [Validators.required, Validators.maxLength(3)]),
    phone:new FormControl('', [Validators.required, Validators.maxLength(10)])

  });
  get cardNumber(){
    return this.paymentForm.get('cardNumber');
  }
  get cvv(){
    return this.paymentForm.get('cvv');
  }
  get phone(){
    return this.paymentForm.get('phone');
  }
  

  paymentDone(){
    return console.log(this.paymentForm.value);
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
