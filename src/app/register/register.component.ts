import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uid=""
  uname=""
  pass=""

  // register group model creation
  registerForm=this.fb.group({
    // form array create
    uid:[``,[Validators.required,Validators.pattern(`[0-9]*`)]],
    pass:[``,[Validators.required,Validators.pattern(`[a-zA-Z0-9 ]*`)]],
    uname:[``,[Validators.required,Validators.pattern(`[a-zA-Z ]*`)]]
  })


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register()
  {

    // console.log(this.registerForm.get(`uname`)?.errors)
    
    var uid=this.registerForm.value.uid
    var pass=this.registerForm.value.pass
    var uname=this.registerForm.value.uname
  if(this.registerForm.valid)
  {
    // asynchronous

  this.ds.register(uid,pass,uname)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      this.router.navigateByUrl("")
    }
  },
  (result)=>{
    alert(result.error.message);
    
  }
  )
}

  else{
      alert("invalid form")
  }
  }

  }

