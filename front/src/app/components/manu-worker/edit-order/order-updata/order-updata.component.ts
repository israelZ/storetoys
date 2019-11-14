import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SerchService} from '../../../../services/serch.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-order-updata',
  templateUrl: './order-updata.component.html',
  styleUrls: ['./order-updata.component.css']
})
export class OrderUpdataComponent implements OnInit {

  idOrder:any;
  Order:any;
  listItems:any;
  totalPrice:Number;
  constructor(public activatedRoute:ActivatedRoute ,public serchService:SerchService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
      {
        this.idOrder =params['order_updeta'] || '';
        if(this.idOrder != '')
        {
           this.serchService.getOrderById(this.idOrder).subscribe(result=>{this.Order=result[0];
            this.listItems=this.Order.items
            this.totalPrice=this.Order.totatToBuy})
        }
      })
    }


      plus(id)
      {
        var i ;
        for(  i = 0; i <  this.listItems.length; i++){
          console.log(id); 
          if ( this.listItems[i]._id == id) 
          {
            this.listItems[i].qut++;
            break; 
          }}
        
          //sum of total item*price
       this.totalPrice=this.listItems.reduce((total,item)=>{return total+=item.qut*item.item.price},0)
      }
      
      minus(id){

        for( var i = 0; i < this.listItems.length; i++){ 
          if ( this.listItems[i]._id == id) 
          {
            if (this.listItems[i].qut!=0) {
              this.listItems[i].qut--
            }
            break; 
          }}

          
        //sum of total item*price
       this.totalPrice=this.listItems.reduce((total,item)=>{return total+=item.qut*item.item.price},0)
      }
      
      
      delet(id){
        for( var i = 0; i < this.listItems.length; i++){ 
          if ( this.listItems[i]._id == id) 
          {
            this.listItems.splice(i, 1);
            break; 
          }
        }

          //sum of total item*price
       this.totalPrice=this.listItems.reduce((total,item)=>{return total+=item.qut*item.item.price},0)
      }

      updateOrder()
      {
        this.Order.totatToBuy=this.totalPrice
        this.serchService.updateOrder(this.Order).subscribe()
      }


}
