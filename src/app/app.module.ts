import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { StInfoComponent } from './st-info/st-info.component';
import { FormsModule } from '@angular/forms';
import { CountriesComponent } from './countries/countries.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';
import { AfricaComponent } from './africa/africa.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { SouthAmericaComponent } from './south-america/south-america.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { CentralAmericaComponent } from './central-america/central-america.component';
import { CountryInfoComponent } from './country-info/country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    NavbarComponent,
    ErrorComponent,
    StInfoComponent,
    AsiaComponent,
    EuropeComponent,
    AfricaComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    OceaniaComponent,
    CentralAmericaComponent,
    CountryInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
