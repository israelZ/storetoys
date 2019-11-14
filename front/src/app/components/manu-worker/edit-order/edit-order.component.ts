import { Component, OnInit } from '@angular/core';
import { SerchService } from '../../../services/serch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  panelOpenState = false;
  listClient:any

  constructor(public serchService:SerchService,public router:Router) { }

  ngOnInit() {
    this.serchService.getByTypeUser({type:'user'}).subscribe(result=>{this.listClient=result})
  }

  getOrders(_id)
  {
      this.router.navigate(_id);
  }
}
