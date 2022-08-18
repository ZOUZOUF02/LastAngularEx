import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { MovieInfo } from '../movies/movies.component';
import { HttpClient } from '@angular/common/http';
import { MoviesComponent } from '../movies/movies.component';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  rank : string | null = ''
  m = new MovieInfo()
  MC = new MoviesComponent(this.http)
  url : string = "https://imdb-api.com/en/API/MostPopularMovies/k_34qdb3f7"
  constructor(private route : ActivatedRoute, private http : HttpClient) { }
  GetRank()
  {
    this.route.paramMap.subscribe(params => {
      this.rank = params.get('rank');
      console.log(this.rank)
    });
  }
  GetMovie()
  {
    this.http.get(this.url).subscribe((data : any) => {
      data.items.forEach((element : any) => {
        if(element.rank == this.rank)
        {
          this.m.id = element.id
      this.m.rank = element.rank
      this.m.rankupdown = element.rankUpDown
      this.m.title = element.title
      this.m.fullTitle = element.fullTitle
      this.m.year = element.year
      this.m.img = element.image
      this.m.crew = element.crew.split(",")
      this.m.imdbrating = element.imDbRating
      this.m.imdbcount = element.imDbRatingCount
        }
      })
    })
  }
  test()
  {
    this.MC.GetMovies()
    this.MC.movies.forEach((element : any) => {
      if(element.rank.toString() == this.rank)
        {
          this.m.id = element.id
      this.m.rank = element.rank
      this.m.rankupdown = element.rankupdown
      this.m.title = element.title
      this.m.fullTitle = element.fullTitle
      this.m.year = element.year
      this.m.img = element.img
      this.m.crew = element.crew
      this.m.imdbrating = element.imdbrating
      this.m.imdbcount = element.imdbcount
        }
    })
  }
  ngOnInit(): void {
    this.GetRank()
    // this.MC.GetMovies()
    this.GetMovie()
  }

}
