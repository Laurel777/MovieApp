import { Injectable } from '@angular/core';
import { Movie1 } from './movie1';

@Injectable({
  providedIn: 'root'
})
export class MovieimageService {

  constructor() { }

  getMoviebyId(id:number):Movie1{
    return this.getAll().find(movie => movie.id == id)!
  }




  getAll():Movie1[]
  {
    return[{
      id:1,
      mdesc:'Comedy movie',
      mname:'Hera Pheri',
      mprice:345,
      mgenre:'Comedy',
      mlanguage:'Hindi',
      mtiming:'3pm - 5.30pm',
      imageUrl:'/assets/Screenshot (186).png'
    },
  
    {
      id:2,
      mdesc:' Very Comedy movie...Best movie',
      mname:' Phir Hera Pheri',
      mprice:777,
      mgenre:'Comedy',
      mlanguage:'Hindi',
      mtiming:'8pm - 11.30pm',
      imageUrl:'/assets/Screenshot (187).png'
    },
    
    {
      id:3,
      mdesc:'Sci-fi movie',
      mname:'Missin Mangal',
      mprice:145,
      mgenre:'Scientific',
      mlanguage:'Hindi',
      mtiming:'1pm - 3pm',
      imageUrl:'/assets/Screenshot (189).png'
    },
    {
      id:4,
      mdesc:'Comedy movie',
      mname:'De dana Dan',
      mprice:705,
      mgenre:' Adult Comedy',
      mlanguage:'Hindi',
      mtiming:'8pm - 10pm',
      imageUrl:'/assets/Screenshot (190).png'
    },
    {
      id:5,
      mdesc:' Family Comedy movie',
      mname:'Hungama',
      mprice:546,
      mgenre:'Comedy',
      mlanguage:'Hindi',
      mtiming:'12pm - 2.30 am',
      imageUrl:'/assets/Screenshot (191).png'
    },
    {
      id:6,
      mdesc:'Not that great movie',
      mname:'Golmaal 3',
      mprice:250,
      mgenre:'Comedy',
      mlanguage:'Hindi',
      mtiming:'2pm - 4.30pm',
      imageUrl:'/assets/Screenshot (192).png'
    },
   
  
  ];
  }
}
