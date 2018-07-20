import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { RegionsComponent } from './components/regions/regions.component';
import { HttpService } from './services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SingleCountryComponent,
    CountriesComponent,
    RegionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: RegionsComponent, pathMatch: 'full' },
      { path: 'region/:region', component: CountriesComponent },
      { path: 'country/:country', component: SingleCountryComponent }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
