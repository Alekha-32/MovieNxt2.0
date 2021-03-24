import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { MoviesData } from '../Models/movies-data';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  MovieForm!: FormGroup

  constructor(private route: ActivatedRoute, private serv: SharedService) { 

  }
  startDate: any;
  movie: any[] = [];
  Sample: any;
  id: string = '';
  actualID: number = 0;
  path: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.actualID = Number(this.id);
    this.Sample = this.serv.getMoviesByID(this.actualID).subscribe((res: any) => {
       this.MovieForm = new FormGroup({
        Movie_ID: new FormControl(res.Movie_ID, [Validators.required]),
        Movie_Title: new FormControl(res.Movie_Title, [Validators.required]),
        Movie_Release: new FormControl(res.Movie_Release, [Validators.required]),
        Movie_Duration: new FormControl(res.Movie_Duration, [Validators.required]),
        Movie_Summary: new FormControl(res.Movie_Summary, [Validators.required]),
        Movie_Rating: new FormControl(res.Movie_Rating, [Validators.required]),
        Movie_Url: new FormControl(res.Movie_Url, [Validators.required])
      })
    });
  }

  updateMovie() {
    this.path = this.MovieForm.value.Movie_Url
    this.MovieForm.value.Movie_Url = this.path.replace(/^.*\\/, "../../../assets/");
    this.serv.updateMovies(this.actualID, this.MovieForm.value).subscribe(res => {
    })
  }
}
