import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  public country: string;
  public countryInfo;
  public countries: any[] = [];
  constructor(private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((apiResponse) => {
      this.country = apiResponse.country;
      this.getSingleCountryInfo();
    });
  }

  public getSingleCountryInfo = () => {
    // this.country = this.route.snapshot.paramMap.get('country');
    this.http.getSingleCountry(this.country)
      .subscribe((apiResponse) => {
        this.countryInfo = apiResponse;
      }, (error) => {
        console.log(error.errorMessage);
      });
  }

  goBack() {
    this.location.back();
  }

}
