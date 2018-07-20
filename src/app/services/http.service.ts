import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  public getCountriesByRegion = (regionName: string): Observable<any> => {
    const response = this.http.get(`${this.url}/region/${regionName}`);
    return response;
  }

  public getSingleCountry = (country: string) => {
    const response = this.http.get(`${this.url}/name/${country}?fullText=true`);
    return response;
  }

  public getCountriesByCurrency = (currency) => {
    const response = this.http.get(`${this.url}/currency/${currency}`);
    return response;
  }

  getCountriesByLanguage = (lang) => {
    const response = this.http.get(`${this.url}/lang/${lang}`);
    return response;
  }

}
