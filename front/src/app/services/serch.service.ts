import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerchService {

  constructor(private http:HttpClient) { }


  login(loginData)
  {
   return this.http.post('/api/signin',loginData)
  }



  postSingIn(user)
  {
    
    return  this.http.post('/singin',user,{withCredentials: true});
  }

  postSingUp(userUp)
  {
    
      return  this.http.post('/singup',userUp);
  }


  getLogin() 
  {
  return   this.http.get('/singin', {withCredentials: true})  
  }

  /**
 * Log the user out of the application.
 * from session
 */
logout(){
return this.http.delete('/logout') 

};
  
  //////////////////////user///////////////////
  getAllUsers()
  {
    return this.http.get('/user/all_user')
  }

  
  getByIdUser(_id)
  {
   return this.http.post('/user/getById',{id:_id})
  }

  getByTypeUser(type)
  {
   return this.http.post('/user/all_by_type_user',type)
  }

  putUpdateUser(user:object)
  {
    return this.http.post('/user/update',user)
  }







  /////////////////item/////////////////////
  getAllItems()
  {
    return this.http.get('/item/all_items')
  }
  getAllItemsToBuy(listIds)
  {
    return this.http.get('/item/getByIdColction')

  }


  getByIdItem(id)
  {
   return this.http.post('/item/getById',{id:id})
  }


  updateItem(item)
  {
    return this.http.post('/item/update',item);
  }



  aadItem(postItem){
   
    return this.http.post('/item/add_item',postItem);
  }




  /////////////////order

  addOrder(order){

    return this.http.post('/order/buyitems',order) 
  }

  getOrderByClient(_id){
  //  console.log(id)
    return this.http.post('/order/byClient',{id:_id}) 
  }


  getOrderById(_id){
  
    return this.http.post('/order/by_id',{id:_id}) 
  }

  updateOrder(order){
  
    return this.http.post('order/update',order) 
  }

}