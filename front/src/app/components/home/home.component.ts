import { Component, OnInit ,ViewChild ,ElementRef} from '@angular/core';
import { Renderer2 } from '@angular/core';
import {SerchService} from '../../services/serch.service'
import {EventService} from '../../services/event.service'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'popper.js'
import 'bootstrap';
import * as $ from 'jquery';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
 


  flagSing:boolean;
  flagLog:boolean;
  unsign:boolean;
  headerToggle = new BehaviorSubject<any>(null);




  
  
  //value input sign in
  userSingIn = new FormGroup({
    name:new FormControl('', Validators.required),
    password:new FormControl('', [Validators.required,Validators.minLength(6)])
   });
   
  //value input log in
userSingUp = new FormGroup({
  name:new FormControl('', Validators.required),
  family:new FormControl('', Validators.required),
  email:new FormControl('', [Validators.required,Validators.email]),
  password:new FormControl('', [Validators.required,Validators.minLength(6)]),
  gender:new FormControl('', Validators.required),
  date:new FormControl(''),
  address:new FormControl('', Validators.required),
  city:new FormControl('', Validators.required),
  country:new FormControl('', Validators.required),
  phone:new FormControl('', [Validators.required,Validators.minLength(9),Validators.pattern('[0-9]*')])
 });

 get firstName(){
  return this.userSingUp.get('firstName')
}

get Name(){
  return this.userSingIn.get('Name')
}


  constructor(public eventService:EventService, private renderer: Renderer2,public serchService:SerchService,public router:Router) 
    {
      

    // this.serchService.getLogin()
    // .subscribe((res: any) =>
    // { 
    //   if(res.loggedIn)
    //   {this.parsLogin(res.loggedIn)}
       
    // })
   }

  ngOnInit() {

    $('#valid').addClass('invisible');

    $('#Singup').on('hidden.bs.modal', function (e) {
      $('#valid').addClass('invisible');
      this.userSingUp.reset();
    })
  }

  SingUp()
  {
    // set now date from Singup & gender
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
     
    this.userSingUp.patchValue({date : mm + '/' + dd + '/' + yyyy});
    this.userSingUp.patchValue({gender : $('input[name=gender]:checked').val()});
  
    if (this.userSingUp.valid) 
    this.serchService.postSingUp(this.userSingUp).subscribe(data=>console.log(data));
    else
    $('#valid').removeClass('invisible');
  
  }

  
  
  
 
  SingIn()
  {
    this.serchService.postSingIn(this.userSingIn).subscribe(data=>this.parsLogin(data))
  }

  parsLogin(data)
  { 
   
     this.eventService.addUser(data);
      switch (data[0].type) {
        case 'meneger':
        this.router.navigate(['menu'])  
          break;
        case 'worker':
        this.router.navigate(['manu_worker'])
          break;
        case 'user':
        this.router.navigate(['menu_client'])
          break;
      
        default:
          break;
      }
    
 }

 admin()
 {
  this.userSingIn.setValue({name:'dani',password:'12346'})
  // this.userSingIn.password='12346'
  
  this.serchService.postSingIn(this.userSingIn).subscribe(data=>this.parsLogin(data))
 }

 worker()
 {
  // this.userSingIn.name='dada'
  // this.userSingIn.password='4343'
  this.userSingIn.setValue({name:'dada',password:'4343'})
  this.serchService.postSingIn(this.userSingIn).subscribe(data=>this.parsLogin(data))
 }
 client()
 {

  this.userSingIn.setValue({name:'Chelsey Dietrich',password:'12346'})
  this.serchService.postSingIn(this.userSingIn).subscribe(data=>this.parsLogin(data))
  }



  // posLog(){
  // { this.serchService.postLog(this.userLog).subscribe(data=> console.log(data)); }}

 

}
