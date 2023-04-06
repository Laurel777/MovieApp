import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies:Movie[];
  result:any;
  constructor(private mservice:MovieService) { }

  ngOnInit(): void {
    this.getMovie();
  }

  private getMovie()
  {
    this.mservice.getMovielist().subscribe(data =>{
      this.movies=data;
      console.log(this.result);
    });
  }
 private getMoviebyid(id:number)
 {
 this.mservice.getMoviebyid(id).subscribe(data =>{
  this.result=data;
  alert("The selected movie is   "+this.result.mname);
 });
 }

 deletebyid(id:number)
 {
this.mservice.deleteMovie(id).subscribe(data => {
  alert("Movie got deleted");
});
 }

}
