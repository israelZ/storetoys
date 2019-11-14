import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }


  ngOnInit() { }

  

  private listBuy$ = new BehaviorSubject<any>(0);
  private user$ = new BehaviorSubject<any>(0);

  addListBuy(myChange:any)
   {
      this.listBuy$.next(myChange);
  }

  getListBuy()
  {
      return this.listBuy$.asObservable();
  }

  addUser(userNew:any) 
  {
      this.user$.next(userNew);
  }

  getUser()
  {
      return this.user$.asObservable();
  }
  
}
