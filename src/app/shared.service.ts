import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import { MoviesData } from './Models/movies-data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:50374/api/Movies";
readonly UserUrl="http://localhost:50374/api/Users";
Movie_Id:number=0;
  constructor(private http:HttpClient) { }
  getMoviesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl)
  }
  // addMovie(val:any):Observable<any>{
  //   console.log(val )
  //   return  this.http.post('http://localhost:49887/api/movies',val)
  // }
  addMovie(val:MoviesData){
    console.log(val )
    return  this.http.post(this.APIUrl,val,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  updateMovies(id: number, mov:any): Observable<Object> {  
    return this.http.put(`${this.APIUrl}/${id}`, mov)
  }
  deleteMovies(id:any){
    return this.http.delete(`${this.APIUrl}/${id}`);
  }
  // getMoviesImages():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl);
  // }
 getMoviesByID(id:number)
 {
   return this.http.get(`${this.APIUrl}/${id}`);
 }
  deleteUsers(id:any){
    return this.http.delete(`${this.UserUrl}/${id}`);
  }
  getUsersList():Observable<any[]>{
    return this.http.get<any>(this.UserUrl)
  }
}
