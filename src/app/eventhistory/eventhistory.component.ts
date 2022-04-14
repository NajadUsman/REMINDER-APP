import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eventhistory',
  templateUrl: './eventhistory.component.html',
  styleUrls: ['./eventhistory.component.css']
})
export class EventhistoryComponent implements OnInit {

  uid:any
  event:any

  constructor(private  ds:DataService ) {
    this.uid=JSON.parse(localStorage.getItem('currentUid')|| '')
    this.ds.history(this.uid)
    .subscribe((result:any)=>{
      this.event=result.history
      
    },(result)=>{
      alert(result.message)
    })

   }

  ngOnInit(): void {
  }

}


