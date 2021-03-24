import { Component, OnInit, Input } from '@angular/core';
import{SharedService} from 'src/app/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-del-movies',
  templateUrl: './show-del-movies.component.html',
  styleUrls: ['./show-del-movies.component.scss']
})
export class ShowDelMoviesComponent implements OnInit {
  path!: string;
  value: any;
  MoviesList:any=[];
  Modaltitle:string | undefined;
  ActivateAddEditMovieComp:boolean=false;
  mov:any;
  movieUpdateForm!: FormGroup;
  updateId:any;
  movie: any;
  constructor(private service:SharedService,private route:Router) { }
 
    ngOnInit(): void {
      this.refreshMoviesList();
  }
  
refreshMoviesList(){
  
  this.service.getMoviesList().subscribe((res:any)=>{
   
    this.MoviesList=res;
    console.log(this.MoviesList)
  
});  
}

updateMovie(Movie_ID:any){
  
  this.route.navigate(["update",Movie_ID])
  
}
deleteMovie(mId:any){
console.log(mId)
this.service.deleteMovies(mId).subscribe(res=>{
  console.log("deleted")
  this.refreshMoviesList();
})
}
}
