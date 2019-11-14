import { Component, OnInit } from '@angular/core';
import {SerchService} from '../../../services/serch.service'
import {EventService} from '../../../services/event.service'

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {

  listOrder:any;
  clientId:String;

  constructor(public serchService:SerchService,public eventService:EventService) { }

  ngOnInit() {
    this.eventService.getUser().subscribe(result=>{
      console.log(result[0]._id)
      this.serchService.getOrderByClient(result[0]._id).subscribe((result=>{
        this.listOrder=result
      }))
    })
  }

}
