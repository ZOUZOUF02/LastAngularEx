import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
  Europe : CountryInfo[] = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {this.GetCountries()
  }
  GetCountries()
{
  this.http.get("https://restcountries.com/v3.1/region/Europe").subscribe((data : any) => {
    data.forEach((e : any) => {
      var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.Europe.push(c)
    });
  })
}
}
