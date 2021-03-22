import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  
  isSubmitted: boolean = false;
  


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  registrationForm = this.formBuilder.group({

    movieTitle: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]*$'),
      Validators.minLength(1),
      Validators.maxLength(500),
    ]),
      
   
  
    movieDuration: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(1),
      Validators.maxLength(2)
    ]),

    movieSummary: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]*$'),
      Validators.minLength(1),
      Validators.maxLength(500),
    ]),
    movieRating: new FormControl('', [
      Validators.required,
      Validators.pattern('/^[0-5]+(\.[0]{1})?$/$'),
      
    ]),

    
   
  });
  onSubmit() {
    this.isSubmitted = true;
    if(this.registrationForm.valid){      
      console.log("User Registration Form Submit", this.registrationForm.value);
    }
  
  }
  get f()
  {
   return  this.registrationForm.controls;
  }


 
  


}





  

