import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public region: string;
  public countries: any[] = [];
  public currency;
  public currencyFilter = false;
  public languageFilter = false;
  public header = 'Countries In';
  public cn: string;
  constructor(private route: ActivatedRoute, private routers: Router, private http: HttpService) { }

  ngOnInit() {
    this.getByCurAndLang();
    this.getAllData();
  }

  public getAllData = () => {
    this.region = this.route.snapshot.paramMap.get('region');
    this.cn = this.region;
    console.log(this.region);
    if (this.region) {
      switch (this.region) {
        case 'asia': {
          this.getCountriesByRegion('asia');
          return;
        }
        case 'africa': {
          this.getCountriesByRegion('africa');
          return;
        }
        case 'americas': {
          this.getCountriesByRegion('americas');
          return;
        }
        case 'europe': {
          this.getCountriesByRegion('europe');
          return;
        }
        case 'polar': {
          this.getCountriesByRegion('polar');
          return;
        }
        case 'oceania': {
          this.getCountriesByRegion('oceania');
          return;
        }
        default: {
          this.routers.navigate(['/']);
        }
      }
    }
  }

  getCountriesByRegion = (regionName: string) => {
    this.http.getCountriesByRegion(regionName)
      .subscribe((response) => {
        this.countries = response;
      });
  }
  public getByLanguage = (lang) => {
    this.http.getCountriesByLanguage(lang)
      .subscribe((apiResponse: any[]) => {
        this.countries = apiResponse;
      });
  }

  public getByCurrency = (cur) => {
    this.http.getCountriesByCurrency(cur)
      .subscribe((apiResponse: any[]) => {
        this.countries = apiResponse;
      });
  }

  public getByCurAndLang = () => {
    this.currency = this.route.queryParams
      .subscribe((res) => {
        if (res['currency']) {

          this.getByCurrency(res['currency']);
        } else if (res['language']) {

          this.getByLanguage(res['language']);
        } else {

        }
      });
  }

}
