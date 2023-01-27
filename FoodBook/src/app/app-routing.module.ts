import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewOrderInfoComponent} from '../app/view-order-info/view-order-info.component';
import {MakePaymentComponent} from '../app/make-payment/make-payment.component';
import{DashboardComponent} from '../app/dashboard/dashboard.component';
import{FooterComponent} from '../app/footer/footer.component';
import{OrderListComponent}from '../app/order-list/order-list.component';
import {PaymentListComponent} from '../app/payment-list/payment-list.component';
import {OrderPaymentComponent} from '../app/order-payment/order-payment.component';
const routes: Routes = [

  {path: '',redirectTo:'/dashboard' ,  pathMatch: 'full'},
  {path: 'order', component: ViewOrderInfoComponent},
  {path: 'payment', component: MakePaymentComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'footer', component: FooterComponent},
  {path:'order-list', component: OrderListComponent},
  {path: 'payment-list', component: PaymentListComponent},
  {path: 'order with payment', component: OrderPaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
