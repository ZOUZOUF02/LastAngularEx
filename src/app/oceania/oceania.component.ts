import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';
@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent implements OnInit {
  Oceania : CountryInfo[] = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.GetCountries()
  }
  GetCountries()
{
  this.http.get("https://restcountries.com/v3.1/region/Oceania").subscribe((data : any) => {
    data.forEach((e : any) => {
        var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.Oceania.push(c)
    });
  })
}
}
