import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie1 } from '../movie1';
import { MovieimageService } from '../movieimage.service';
@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit {

  movie:Movie1;
  constructor(private activatedroute:ActivatedRoute,
    private ms:MovieimageService,
       private router:Router) {
      activatedroute.params.subscribe((params) =>{
        if(params['id'])
        this.movie=ms.getMoviebyId(params['id'])
      })
     }


  ngOnInit(): void {
  }
  Bookticket(){
    this.router.navigateByUrl('/payment')
  }


}
