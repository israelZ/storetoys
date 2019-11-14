import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SerchService} from '../../../services/serch.service'
import {EventService} from '../../../services/event.service'
import { ActivatedRoute } from '@angular/router';
import { filter, map, flatMap,reduce } from 'rxjs/operators';
import { from } from 'rxjs';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {
  
  listBuy:any
  totalPrice:number
  today:any
  client:any


  constructor(public eventService:EventService, public serchService:SerchService ,public activatedRoute:ActivatedRoute ,public router:Router) {
    
    
    this.listBuy= this.router.getCurrentNavigation().extras
    if (this.listBuy!) {
      console.log('empty')
      
    }
    this.sum()
    this.eventService.getUser().subscribe(result=>this.client=result[0])
    console.log(this.client)
  }  
  
  
  ngOnInit() {

  }

  delet(id){
    for( var i = 0; i < this.listBuy.length; i++){ 
      if ( this.listBuy[i].item._id == id) 
      {
        this.listBuy.splice(i, 1);
        i--;
        break; 
      }
      this.sum()
   }
  }

  plus(id){
    
    for( var i = 0; i < this.listBuy.length; i++){ 
      if ( this.listBuy[i].item._id == id) 
      {
        this.listBuy[i].qut++
        i--;
        break; 
      }
      
    }
    this.sum()
}

  minus(id){
    for( var i = 0; i < this.listBuy.length; i++){ 
      if ( this.listBuy[i].item._id == id) 
      {
        this.listBuy[i].qut--
        if (this.listBuy[i].qut==0)
        this.delet(id)
        i--;
        break; 
      }
    }
    this.sum()
  }

  sum(){
    this.totalPrice=this.listBuy.reduce((total,item)=>total+=item.qut*item.item.price,0)
  }

orderBuy(){

this.today = new Date();
var dd = String(this.today.getDate()).padStart(2, '0');
var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = this.today.getFullYear();

this.today = mm + '/' + dd + '/' + yyyy;
    let order=
    {
      status:'1',
      date:this.today,
      totatToBuy:this.totalPrice,
      idClient:{
          _id:this.client._id,
          name:this.client.name,
          family:this.client.family,    
          email:this.client.email,
          city :this.client.city,},
         items:this.listBuy

    }
    console.log(order)
    
    this.serchService.addOrder(order).subscribe(data=>{})
  }

}
