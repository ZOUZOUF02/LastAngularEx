import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./north-america.component.css']
})
export class NorthAmericaComponent implements OnInit {
  NorthAmerica : CountryInfo[] = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.GetCountries()
  }
  GetCountries()
  {
    this.http.get("https://restcountries.com/v3.1/region/americas").subscribe((data : any) => {
      data.forEach((e : any) => {
        if(e.subregion == "North America")
        {
        var c = new CountryInfo()
        c.name = e.name.common
        c.offname = e.name.official
        c.flag = e.flags.png
        c.region = e.region
        this.NorthAmerica.push(c)
        }
      });
    })
  }
}
