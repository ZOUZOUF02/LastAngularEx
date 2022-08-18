import { getLocaleDayNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  region : string | null = ''
  constructor(private http : HttpClient, private route : ActivatedRoute) { }
  countries : CountryInfo[] = []
  ngOnInit(): void {
    this.GetRegion()
    if(this.region == "North America")
    {
      this.GetNA()
    }
    else
    {
      if(this.region == "South America")
      {
        this.GetSA()
      }
      else
      {
        if(this.region == "Asia")
        {
          this.GetAsia()
        }
        else
        {
          if(this.region == "Europe")
          {
            this.GetEurope()
          }
          else
          {
            if(this.region == "Africa")
            {
              this.GetAfrica()
            }
            else
            {
              if(this.region == "Carribean")
              {
                this.GetCarribean()
              }
              else
              {
                if(this.region == "Oceania")
                {
                  this.GetOceania()
                }
                else
                {
                  this.GetAllCountries()
                }
              }
            }
          }
        }
      }
    }
  }
  GetOceania()
  {
    this.http.get("https://restcountries.com/v3.1/region/Oceania").subscribe((data : any) => {
    data.forEach((e : any) => {
        var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.countries.push(c)
    });
  })
  }
  GetCarribean()
  {
    this.http.get("https://restcountries.com/v3.1/region/americas").subscribe((data : any) => {
      data.forEach((e : any) => {
        if(e.subregion == "Caribbean")
        {var c = new CountryInfo()
        c.name = e.name.common
        c.offname = e.name.official
        c.flag = e.flags.png
        c.region = e.region
        this.countries.push(c)
        }
      });
    })
  }
  GetAfrica()
  {
    this.http.get("https://restcountries.com/v3.1/region/africa").subscribe((data : any) => {
      data.forEach((e : any) => {
        var c = new CountryInfo()
        c.name = e.name.common
        c.offname = e.name.official
        c.flag = e.flags.png
        c.region = e.region
        this.countries.push(c)
      });
    })
  }
  GetSA()
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
        this.countries.push(c)
        }
      });
    })
  }
  GetAsia()
  {
    this.http.get("https://restcountries.com/v3.1/region/asia").subscribe((data : any) => {
      data.forEach((e : any) => {
        var c = new CountryInfo()
        c.name = e.name.common
        c.offname = e.name.official
        c.flag = e.flags.png
        c.region = e.region
        this.countries.push(c)
      });
    })
  }
  GetEurope()
  {
    this.http.get("https://restcountries.com/v3.1/region/Europe").subscribe((data : any) => {
    data.forEach((e : any) => {
      var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.countries.push(c)
    });
  })
  }
  GetNA()
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
        this.countries.push(c)
        }
      });
    })
  }
GetRegion()
{
  this.route.paramMap.subscribe(params => {
    this.region = params.get('region');
    console.log(this.region)
})
}
GetAllCountries()
{
  this.http.get("https://restcountries.com/v3.1/all").subscribe((data : any) => {
    data.forEach((e : any) => {
      var c = new CountryInfo()
      c.name = e.name.common
      c.offname = e.name.official
      c.flag = e.flags.png
      c.region = e.region
      this.countries.push(c)
    });
  })
}
}
export class CountryInfo
{
  name : string = ''
  offname : string = ''
  flag : string = ''
  region : string = ''
}
