import { Component, OnInit, Output, EventEmitter,ViewChild, AfterViewInit  } from '@angular/core';
import {ToysComponent} from './toys/toys.component'
import {Router} from '@angular/router'

@Component({
  selector: 'app-toysitems',
  templateUrl: './toysitems.component.html',
  styleUrls: ['./toysitems.component.css']
})
export class ToysitemsComponent implements OnInit  {
  

  message:string;


  constructor(public router:Router) { }

  ngOnInit() {
  }

  getItemCtegory(ctegory)
  {
    this.router.navigate(['menu_client/toysitems',ctegory])
  }

  receiveMessage($event) {
    
   this.message= $event
  }

  }


