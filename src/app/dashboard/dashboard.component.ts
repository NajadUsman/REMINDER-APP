import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
aim="shall I Remind You Something"

userName=""
userID=""

  homeForm = this.fb.group({
    // form array create
    udate: [``, [Validators.required]],
    desc: [``, [Validators.required]]

  })


  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { 
    if(localStorage.getItem('currentUid')){
      this.userName=JSON.parse(localStorage.getItem('currentUser') || '')
      this.userID=JSON.parse(localStorage.getItem('currentUid') || '')

      

    }
  }


  ngOnInit(): void {
  }

  addEvent(){
    var date=this.homeForm.value.udate
    var desc=this.homeForm.value.desc

    if(this.homeForm.valid){
      // asynchronous call add-event
      this.ds.addEvent(this.userID,date,desc)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
          }
          
        },
        (result)=>{
          alert(result.error.messge)
        }
        )
        this.homeForm.reset()
      }
      else{
        alert("invalid form")
      }
    }
  }


