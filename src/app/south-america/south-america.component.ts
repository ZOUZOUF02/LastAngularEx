import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';
@Component({
  selector: 'app-south-america',
  templateUrl: './south-america.component.html',
  styleUrls: ['./south-america.component.css']
})
export class SouthAmericaComponent implements OnInit {

  constructor(private http : HttpClient) { }
  SouthAmerica : CountryInfo[] = []
  ngOnInit(): void {this.GetCountries()
  }
  GetCountries()
{
  this.http.get("https://restcountries.com/v3.1/region/americas").subscribe((data : any) => {
    data.forEach((e : any) => {
      if(e.subregion == "South America")
      {
        var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.SouthAmerica.push(c)
      }
    });
  })
}
}
