import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {



  constructor(private payment : HttpClient) { }

  url = "https://prickly-knickers-boa.cyclic.app/Payments";

  getPayment(){
    return this.payment.get(this.url).pipe(map((res:any)=>{
      return res;
    }))
    
  }
}
