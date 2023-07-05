import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Movie} from "../models/movie";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output()
  newMovieEvent = new EventEmitter<Movie>();

  addMovieForm: FormGroup;

  constructor() {
    this.addMovieForm = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
      description: new FormControl(null),
      like: new FormControl(false),
      dislike: new FormControl(false)
    })
  }

  addMovie() {
    this.addMovieForm.patchValue({
      image: 'https://images.unsplash.com/photo-1667331698574-27f423e37484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG9sZCUyMG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    })
    this.newMovieEvent.emit(this.addMovieForm.value);
  }

}