import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  UsersList:any=[];

  constructor(private service:SharedService,private route:Router) { }

  ngOnInit(): void {
    this.refreshUsersList();
  }
  refreshUsersList(){
  
    this.service.getUsersList().subscribe((res:any)=>{
     // const data=res.data; 
      this.UsersList=res;
      console.log(this.UsersList)
     // console.log(data); 
  });  
}
deleteUsers(mId:any){
  console.log(mId)
  this.service.deleteUsers(mId).subscribe(res=>{
    console.log("deleted")
    this.refreshUsersList();
  })
  }
}
