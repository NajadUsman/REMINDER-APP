import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid=""
  pass=""

  loginForm=this.fb.group({
    // form array create
    uid: [``, [Validators.required, Validators.pattern(`[0-9]*`)]],
    pass: [``, [Validators.required, Validators.pattern(`[a-zA-Z0-9 ]*`)]]
  })
  routerLogin: any;


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // 3.login using two way binding

  login()
  {
    var uid=this.loginForm.value.uid
    var pass=this.loginForm.value.pass

    if(this.loginForm.valid)
    {
//       // asynchronous call-login
      this.ds.login(uid,pass)
      .subscribe((result:any)=>{
        if(result){
          localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
          localStorage.setItem('currentUid',JSON.stringify(result.cUid))
            alert(result.message)
            this.router.navigateByUrl('dashboard')

        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )


  
    }
    else{
      alert("invalidform")
    }
}
  }

