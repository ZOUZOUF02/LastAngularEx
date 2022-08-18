import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies : MovieInfo[] = []
  constructor(private http : HttpClient) { }
  GetMovies()
  {
    this.http.get('https://imdb-api.com/en/API/MostPopularMovies/k_34qdb3f7').subscribe((data : any) => {
     data.items.forEach((element : any) => {
      var m = new MovieInfo()
      m.id = element.id
      m.rank = element.rank
      m.rankupdown = element.rankUpDown
      m.title = element.title
      m.fullTitle = element.fullTitle
      m.year = element.year
      m.img = element.image
      m.crew = element.crew.split(",")
      m.imdbrating = element.imDbRating
      m.imdbcount = element.imDbRatingCount
      this.movies.push(m)
     })
    });
  }
  ngOnInit(): void {
    this.GetMovies()
  }

}
export class MovieInfo
{
  id : string = ''
  rank : number = 0
  rankupdown : string = ''
  title : string = ''
  fullTitle : string = ''
  year : number = 0
  img : string = ''
  crew : string[] = []
  imdbrating : number = 0
  imdbcount : number = 0
}