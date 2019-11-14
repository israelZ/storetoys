import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SerchService } from '../../../../services/serch.service';

@Component({
  selector: 'app-order-client',
  templateUrl: './order-client.component.html',
  styleUrls: ['./order-client.component.css']
})
export class OrderClientComponent implements OnInit {

  listOrderByClient:any
  idClient:any

  constructor(public router:Router,public activatedRoute:ActivatedRoute ,public serchService:SerchService) {  }

  ngOnInit() {
    console.log('sasa')
    this.activatedRoute.params.subscribe(params => 
      {
        this.idClient =params['idclient'] || '';
  
        if(this.idClient != '')
        {
           this.serchService.getOrderByClient(this.idClient).subscribe(result=>{this.listOrderByClient=result;})
        }
      })
  }



}
