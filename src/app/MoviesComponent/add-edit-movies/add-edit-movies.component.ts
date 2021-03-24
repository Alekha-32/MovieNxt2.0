import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { MoviesData } from 'src/app/Models/movies-data';

@Component({
  selector: 'app-add-edit-movies',
  templateUrl: './add-edit-movies.component.html',
  styleUrls: ['./add-edit-movies.component.scss']
})
export class AddEditMoviesComponent implements OnInit {

  MovieForm!: FormGroup
  path!: string;
  employeeIdUpdate: null;
  SharedService: any;
  dataSaved: boolean | undefined;
  massage: string | undefined;
  data: any;
  movies: any;
  movieBYId: any;
  updateId: any;
  movieUpdateForm!: FormGroup;
  constructor(private as: SharedService, private router: Router) { }

  Movie_Id: string | undefined;
  Movie_Title: string | undefined;

  movieObj: MoviesData = {
    Movie_Title: '',
    Movie_Release: '',
    Movie_Duration: 0,
    Movie_Summary: '',
    Movie_Rating: 0,
    Movie_Url: '',
    movieBasedOnGenreModels: '',
    movieBasedOnStarCastModels: ''
  }
  ngOnInit() {
    this.MovieForm = new FormGroup({
      Movie_Title: new FormControl('', [Validators.required]),
      Movie_Release: new FormControl('', [Validators.required]),
      Movie_Duration: new FormControl('', [Validators.required]),
      Movie_Summary: new FormControl('', [Validators.required]),
      Movie_Rating: new FormControl('', [Validators.required]),
      Movie_Url: new FormControl('', [Validators.required])
    })

  }
  
  addMovie() {
    this.path = this.MovieForm.value.Movie_Url
    this.MovieForm.value.Movie_Url = this.path.replace(/^.*\\/, "../../../assets/");
    // this.data=this.MovieForm.value;
    // console.log(this.data);
    this.movieObj.Movie_Title = this.MovieForm.value.Movie_Title;
    this.movieObj.Movie_Release = this.MovieForm.value.Movie_Release;
    this.movieObj.Movie_Duration = this.MovieForm.value.Movie_Duration;
    this.movieObj.Movie_Summary = this.MovieForm.value.Movie_Summary;
    this.movieObj.Movie_Rating = this.MovieForm.value.Movie_Rating;
    this.movieObj.Movie_Url = this.MovieForm.value.Movie_Url;
    this.movieObj.movieBasedOnGenreModels = "null";
    this.movieObj.movieBasedOnStarCastModels = "null";
    this.as.addMovie(this.movieObj)
      .subscribe((res => {
        if (res)
          this.router.navigate(['show-delete']);

      }))

  }

}

