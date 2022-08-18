import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CountryInfo } from '../countries/countries.component';
@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  name : string | null = ''
  region : string | null = ''
  constructor(private route : ActivatedRoute, private http : HttpClient) { }
  c = new CountryInfo()
  url : string = ""
  ngOnInit(): void {
    this.GetName(),
    this.GetCountry()
    this.GetRegion()
  }
  GetRegion()
  {
    this.route.paramMap.subscribe(params => {
      this.region = params.get('region');
      console.log(this.region)
    });
  }
  GetName()
  {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.url = "https://restcountries.com/v3.1/name/" + this.name
      console.log(this.name)
    });
  }
  GetCountry()
  {
    this.http.get(this.url).subscribe((data : any) => {
      data.forEach((e : any) => {
        this.c.name = e.name.common
      this.c.offname = e.name.official
      this.c.flag = e.flags.png
      this.c.region = e.region
      });
    })
  }
}
