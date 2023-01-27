import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatNativeDateModule } from '@angular/material/core';
import { OrderListComponent } from './order-list/order-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { OrderPaymentComponent } from './order-payment/order-payment.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ViewOrderInfoComponent,
    MakePaymentComponent,
    DashboardComponent,
    FooterComponent,
    OrderListComponent,
    PaymentListComponent,
    OrderPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
    // FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
