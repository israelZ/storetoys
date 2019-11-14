import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import {SerchService} from '../../../../services/serch.service'
import * as $ from 'jquery';



@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  myControl = new FormControl();
  img:string;
  id:string;
  item:any={id:this.id, name:'',quantity:'',price:'',description:'',category:''}
  selectedFile:File;
  flag:boolean=false;
  category: string[] = ['boys', 'girls'];



  constructor(private activatedRoute:ActivatedRoute, public serchService:SerchService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => 
      {
        this.id =params['id'] || '';
        if(this.id != '')
        {
           this.serchService.getByIdItem(this.id)
           .subscribe(result=>
            {
             this.item=result[0];
             this.img=this.item.url;
            })
        }
      });


  }

// set new value in image
  changeImage(event)
  {
    this.flag=true;
    var tgt = event.target ,files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) 
    {
        var fr = new FileReader();
        //fr.onload = function () {$('#imgUp').attr('src', fr.)}
        fr.readAsDataURL(files[0]);
    }
    this.selectedFile = <File>event.target.files[0];
  }
  
  
  
  // set new value in item
  updateItem()
  {
    var formData = new FormData();

    if(this.flag)
     { formData.append('file',this.selectedFile,this.selectedFile.name);}
    
    formData.append('item', JSON.stringify(this.item))

    this.serchService.updateItem(formData).subscribe(result=>console.log(result))
  }



}
