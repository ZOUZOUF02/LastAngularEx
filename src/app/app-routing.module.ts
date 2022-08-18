import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { CentralAmericaComponent } from './central-america/central-america.component';
import { CountriesComponent, CountryInfo } from './countries/countries.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { ErrorComponent } from './error/error.component';
import { EuropeComponent } from './europe/europe.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviesComponent } from './movies/movies.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { SouthAmericaComponent } from './south-america/south-america.component';
import { StInfoComponent } from './st-info/st-info.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  // {path:"", component: MoviesComponent},
  {path:"movies", loadChildren: () => import('src/app/movies/movies.module').then(m => m.MoviesModule)},
  {path:"movie-info/:rank", component: MovieInfoComponent},
  {path:"students", loadChildren: () => import('src/app/student/student.module').then(m => m.StudentsModule) },
  {path:"studentinfo/:id", component : StInfoComponent},
  {path: "countries/All", component : CountriesComponent},
  // {path: "countries/Asia", component : AsiaComponent},
  // {path: "countries/Europe", component : EuropeComponent},
  // {path: "countries/Africa", component : AfricaComponent},
  // {path: "countries/Oceania", component : OceaniaComponent},
  // {path: "countries/NorthAmerica", component : NorthAmericaComponent},
  // {path: "countries/SouthAmerica", component : SouthAmericaComponent},
  // {path: "countries/Carribean", component : CentralAmericaComponent},
  {path: "countries/:region/:name", component : CountryInfoComponent},
  {path: "countries/:region", loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)},
  {path:"**", component: ErrorComponent},
  {path:"countries/**", component:ErrorComponent},
  {path:"countries/All/**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
