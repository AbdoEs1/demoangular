import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get("https://restcountries.eu/rest/v2/all/");
  }
  getByName(name:string) {
    return this.http.get("https://restcountries.eu/rest/v2/name/"+name);
  }
}
