import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../countries/countries.component';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {
  Africa : CountryInfo[] = []
  constructor(private http : HttpClient) { }
  GetCountries()
{
  this.http.get("https://restcountries.com/v3.1/region/africa").subscribe((data : any) => {
    data.forEach((e : any) => {
      var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.Africa.push(c)
    });
  })
}
  ngOnInit(): void {this.GetCountries()
  }

}
