import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';

@Component({
  selector: 'app-central-america',
  templateUrl: './central-america.component.html',
  styleUrls: ['./central-america.component.css']
})
export class CentralAmericaComponent implements OnInit {
  CentralAmerica : CountryInfo[] = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {this.GetCountries()
  }
  GetCountries()
{
  this.http.get("https://restcountries.com/v3.1/region/americas").subscribe((data : any) => {
    data.forEach((e : any) => {
      if(e.subregion == "Caribbean")
      {var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.CentralAmerica.push(c)
      }
    });
  })
}
}
