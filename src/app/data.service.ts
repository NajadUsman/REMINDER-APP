import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(uid:any,password:any,uname:any)
  {

    // json data
    const data={
      uid,password,uname
    }
    // register API
    return this.http.post('http://localhost:3000/register',data)

  }

  login(uid:any,password:any)
  {
    // json data
    const data={
      uid,
      password
    }
    // login api
    return this.http.post('http://localhost:3000/login',data)
  }

  // addevent
  addEvent(uid:any,date:any,desc:any)
  {
    const data={
      uid,date,desc
    }
    return this.http.post('http://localhost:3000/dashboard',data)

  }
  
  // history

  history(uid:any)
  {
    const data={
      uid
    }
    return this.http.post('http://localhost:3000/history',data)

  }

}
