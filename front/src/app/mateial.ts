import {MatButtonModule, MatCheckboxModule,MatCardModule,MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
          MatButtonModule, 
          MatCheckboxModule,
          MatCardModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          // Component,
          // FormControl,
          MatSidenavModule,
        ],
 exports: [MatButtonModule,   
     MatCheckboxModule,
     MatCardModule,
     MatMenuModule,
     MatToolbarModule,
     MatIconModule,
    //  Component,
    //  FormControl,
     MatSidenavModule,
   ]
})
export class MaterialModule { }