import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SerchService} from '../../../../services/serch.service'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:string;
  user:any={type:'',name:'',family:'',password:'',email:'',city :'',phone:'',active:''}
  constructor(private activatedRoute:ActivatedRoute, public serchService:SerchService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
    {
      this.id =params['id'] || '';

      if(this.id != '')
      {
         this.serchService.getByIdUser(this.id).subscribe(result=>{console.log(result[0]); this.user=result[0]})
      }
    });
  }


  //send new value in user
  update()
  {
    this.serchService.putUpdateUser(this.user).subscribe(result=>console.log(result))
  }
}
