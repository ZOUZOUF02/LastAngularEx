import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  Asia : CountryInfo[] = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {this.GetCountries()
  }
  GetCountries()
  {
    this.http.get("https://restcountries.com/v3.1/region/asia").subscribe((data : any) => {
      data.forEach((e : any) => {
        var c = new CountryInfo()
        c.name = e.name.common
        c.offname = e.name.official
        c.flag = e.flags.png
        c.region = e.region
        this.Asia.push(c)
      });
    })
  }
}
