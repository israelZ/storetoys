import { Component, OnInit } from '@angular/core';
import {SerchService} from '../../../services/serch.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any=[];
  

  constructor(public serchService:SerchService ,public router:Router) { }

  ngOnInit(){
  // get from server all users
        this.serchService.getAllUsers().subscribe(users=>this.users=users)
  }

  updateItUser(id)
  {
    this.router.navigate(['menu/users',id])
  }

}
