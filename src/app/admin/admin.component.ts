import { Component, OnInit } from '@angular/core';
import { AdminService} from 'src/app/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

   //lists:Observable<any>
  //lists:any[]=[];
  constructor(private adminservice:AdminService,private router:Router) { 
   
  }
  ngOnInit(): void {
  //   this.adminservice.Index().subscribe((res:any)=>{
  //   const data=res.data;
  //   this.lists=data;
  //   console.log(data);
  // });
}
}
