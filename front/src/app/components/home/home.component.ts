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

  
  
  FlagMeseegEnter:boolean;
  NameUserForMesseg:String;
  Messeg:String;
  

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

//  geteer to fromGroup
 get firstName(){
  return this.userSingUp.get('firstName')
}
get FirstName(){
  return this.userSingIn.get('Name')
}


  constructor(public eventService:EventService, private renderer: Renderer2,public serchService:SerchService,public router:Router) 
    {
      
      this.FlagMeseegEnter=false;
      // this.serchService.getLogin()
      // .subscribe((res: any) =>
      // { 
        //   if(res.loggedIn)
        //   {this.parsLogin(res.loggedIn)}
        
        // })
      
      
      
      }
      
    
  ngOnInit() {
    
    $('#valid').addClass('invisible');
    
    
    // close model singup
    var resetInputUserUp=this.userSingUp
    $('#Singup').on('hidden.bs.modal', function (e) {
     
      // hiden alert 
      $('#valid').addClass('invisible');

      
      // hiden valid input
      $('#inputName').removeClass('is-invalid');
      $('#inputFamily').removeClass('is-invalid');
      $('#inputPassword').removeClass('is-invalid');
      $('#inputEmail').removeClass('is-invalid');
      $('#inputAddress').removeClass('is-invalid');
      $('#inputCity').removeClass('is-invalid');
      $('#inputCountry').removeClass('is-invalid');
      $('#inputPhone').removeClass('is-invalid');

  
      // remove input&error
      resetInputUserUp.reset();
      
    })

    // close model singin
    var resetInputUserIn=this.userSingIn
    $('#Singin').on('hidden.bs.modal', function (e){

       // hiden valid input
      $('#inputUserIn').removeClass('is-invalid');
      $('#inputPasswordIn').removeClass('is-invalid');

      // remove input&error
      resetInputUserIn.reset();
    })
    
  }

  SingUp()
  {
    
    // set now date from Singup & gender
    this.setDateSingup()
    this.userSingUp.patchValue({gender : $('input[name=gender]:checked').val()});
  


    // test if valid input of Singup 
    if (this.userSingUp.valid)
    {
      
      this.serchService.postSingUp(this.userSingUp.value).subscribe(data=>{
        if(data!={})
        {
          // set username and hide model
          this.NameUserForMesseg=this.userSingUp.value.name
          $('#Singup').modal('hide')
         
           // show messege Hello
          this.Messeg="Thanks for signing up You will immediately go to the store Fun shopping !!"
          this.FlagMeseegEnter=true;

           // go to console from user
          setTimeout(()=>this.parsLogin(data),3000)
        }
      });
    } 
    else
    $('#btnSingUp').popover('show')

    // hide tooltipe in btn
    setTimeout(()=>{ $('#btnSingUp').popover('hide'); }, 3000)

  }

  
  SingIn()
  {

    // test if valid input of Singin 
    if (this.userSingIn.valid)
    {
      this.serchService.postSingIn(this.userSingIn.value).subscribe(
        UserReturn=>{

          // set username and hide model
          this.NameUserForMesseg=this.userSingIn.value.name;
          $('#Singin').modal('hide')
         
          // show messege Hello
          this.FlagMeseegEnter=true;
          this.Messeg="Welcome to the store"
         
          // go to console from menger/worker/user
          setTimeout(()=>this.parsLogin(UserReturn),3000)
          
        },
        err=>{
              //  show poppovers element
              $('#btnSingIn').attr('data-content',err.error)
              $('#btnSingIn').popover('show')
              //  hide poppovers element
              setTimeout(()=>{ $('#btnSingIn').popover('dispose'); }, 3000)        
            },
        ()=>{}
        )
    }
   else
   {
    //   //  showe&hide poppovers element
     $('#btnSingIn').attr('data-content',"Invalid user or password")
     $('#btnSingIn').popover('show')
    
     setTimeout(()=>{ $('#btnSingIn').popover('dispose'); }, 3000)
    }
  }



  setDateSingup(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.userSingUp.patchValue({date : mm + '/' + dd + '/' + yyyy});
  }



  // go to console of type permission
  parsLogin(data)
  { 
   
     this.eventService.addUser(data);
      switch (data.type) {
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
  this.userSingIn.setValue({name:'dani',password:'123456'})
  // this.userSingIn.password='12346'
  
  this.serchService.postSingIn(this.userSingIn.value).subscribe(data=>this.parsLogin(data))
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
