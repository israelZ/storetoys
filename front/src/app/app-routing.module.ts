import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {ManuWorkerComponent} from './components/manu-worker/manu-worker.component'
import {EditItemsComponent} from './components/manu-worker/edit-items/edit-items.component'
import {EditOrderComponent} from './components/manu-worker/edit-order/edit-order.component'
import {OrderClientComponent} from './components/manu-worker/edit-order/order-client/order-client.component'
import {OrderUpdataComponent} from './components/manu-worker/edit-order/order-updata/order-updata.component'
import {MenuComponent} from './components/menu/menu.component'
import {ItemsComponent} from './components/menu/items/items.component'
import {UpdateItemComponent} from './components/menu/items/update-item/update-item.component'
import {UsersComponent} from './components/menu/users/users.component'
import {ManueClientComponent} from './components/manue-client/manue-client.component'
import {ListBuyComponent} from './components/manue-client/list-buy/list-buy.component'
import {UpdateUserComponent} from './components/menu/users//update-user/update-user.component'
import { AboutComponent } from './components/manue-client/about/about.component';
import { ToysitemsComponent } from './components/manue-client/toysitems/toysitems.component';
import { ToysComponent } from './components/manue-client/toysitems/toys/toys.component';
import { SpecificItemComponent } from './components/manue-client/toysitems/toys/specific-item/specific-item.component';
import { HistoryOrderComponent } from './components/manue-client/history-order/history-order.component';

import { from } from 'rxjs';

const routes: Routes = [
  {path: '',  redirectTo: 'home',pathMatch: 'full'},
  {path:'home',component:HomeComponent },
  {path:'menu',component:MenuComponent, children :[
    {path:'users',component:UsersComponent,children:
      [{path:':id',component:UpdateUserComponent}]},
    {path:'items',component:ItemsComponent,children:
         [{path:':id',component:UpdateItemComponent}]},
    {path:'editorder',component:EditOrderComponent,children:[
        {path:':idclient',component:OrderClientComponent,children:[
           {path:':order_updeta',component:OrderUpdataComponent}]}]}]},
  {path:'menu_client',component:ManueClientComponent,children:[
        {path:'about',component:AboutComponent},
        {path:'toysitems',component:ToysitemsComponent,children:
            [{path:':category',component:ToysComponent,children:[
                {path:':item',component:SpecificItemComponent}]}
              ]},
        {path:'list_buy',component:ListBuyComponent},
        {path:'historyorder',component:HistoryOrderComponent}]},
  {path:'manu_worker',component:ManuWorkerComponent,children:[
        {path:'edit_items',component:ItemsComponent,children:
             [{path:':id',component:UpdateItemComponent}]},
        {path:'edit_order',component:EditOrderComponent,children:[
                {path:':idclient',component:OrderClientComponent,children:[
                       {path:':order_updeta',component:OrderUpdataComponent}]}]}]}
  ]
      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
