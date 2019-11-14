import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SerchService} from '../../../../../services/serch.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-specific-item',
  templateUrl: './specific-item.component.html',
  styleUrls: ['./specific-item.component.css']
})
export class SpecificItemComponent implements OnInit {

idItem:string;
thisItem:any;

  constructor(public activatedRoute:ActivatedRoute,public serchService:SerchService,public router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
      {
        this.idItem =params['item'] || '';
  
        if(this.idItem != '')
        {
           this.serchService.getByIdItem(this.idItem).subscribe(result=>{this.thisItem=result[0]})
        }
      })
    }



}



