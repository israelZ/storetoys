import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SerchService} from '../../../../services/serch.service'
import {EventService} from '../../../../services/event.service'
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { filter, map, flatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {



category:string;
items:any=[]
itemFromCategory:any=[]
id:number=1;

  constructor(public activatedRoute:ActivatedRoute ,public serchService:SerchService,
              public router: Router,public eventService:EventService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
      {
        this.category =params['category'] || '';
  
        if(this.category != '')
        { this.serchService.getAllItems().subscribe(result=>
          {
            this.items=result
            
            this.itemFromCategory=this.items.filter(item=>item.category==this.category)

        })}
      })}
      addToBuy(item:string) {
          this.eventService.addListBuy(item) 
      }


      
 }
      
  


