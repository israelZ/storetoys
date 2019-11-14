import { Component, OnInit } from '@angular/core';
import {SerchService} from '../../services/serch.service'
import {ChatService} from '../../services/chat.service'
import {EventService} from '../../services/event.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   user :any;
   messageText:String;
   messageArray:Array<{user:String,message:String}> = [];

  constructor(public router:Router, public serchService:SerchService,
    public eventService:EventService,public chatService:ChatService)
     {
      
      // this.chatService.newUserJoined()
      // .subscribe(data=> this.messageArray.push(data));

      // this.chatService.userLeftRoom()
      //   .subscribe(data=>this.messageArray.push(data));


      // this.chatService.newMessageReceived()
      // .subscribe(data=>this.messageArray.push(data));
    }

  ngOnInit() {

    // this.eventService.getUser().subscribe(data=>this.user=data[0])
  } 
     
//   logout()
//   {
//     this.serchService.logout().subscribe((resp)=>{
//       this.router.navigate(['home'])
//     },
//     (errorResp) =>{
//       console.log('Oops, something went wrong getting the logout in status')
//     })
//   }

//   join(){
//     this.chatService.joinRoom({user:this.user.name, room:'global'});
// }


// leave(){
//   this.chatService.leaveRoom({user:this.user.name, room:'global'});
// }

// sendMessage()
//     {
//         this.chatService.sendMessage({user:this.user.name, room:'global', message:this.messageText});
//     }


 
}
