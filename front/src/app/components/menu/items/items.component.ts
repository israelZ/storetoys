import { Component, OnInit } from '@angular/core';
import {SerchService} from '../../../services/serch.service'
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  selectedFile =null ;
   fd:FormData;
  item={ price:'',quantity:'',name:'',category:'',description:''}
  items:any=[];
  myUrl:String
  flagAdd:boolean;
  flagItem:boolean;

  constructor(public serchService:SerchService,public router:Router) { 
    this.myUrl=this.router.url
  }

  ngOnInit() {
    this.serchService.getAllItems().subscribe(item=>this.items=item)
  }

  
  createFormData(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addItem() {

   var postItem =new FormData
   var itemJson=JSON.stringify(this.item)
   postItem.append('file',this.selectedFile,this.selectedFile.name);
   postItem.append('item',itemJson);
   this.serchService.aadItem(postItem).subscribe(result=>{console.log(result)});
  }

  updateItem(id:string)
  {
    console.log(this.myUrl)
    this.router.navigate([this.myUrl,id])
  }

  

}
