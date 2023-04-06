import { Component, OnInit } from '@angular/core';
import { Movie1 } from '../movie1';
import { MovieimageService } from '../movieimage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:Movie1[]=[];
  constructor(private ms:MovieimageService,private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(params=>{
      if(params.searchItem)
      this.movies=this.ms.getAll().filter(movie => movie.mname.toLowerCase().includes(params.searchItem.toLowerCase()))
      else
      this.movies=this.ms.getAll();
         })


  }

}
