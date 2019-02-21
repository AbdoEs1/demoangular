import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../Model/country';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries:Array<Country>;
  constructor(private _countryService:CountryService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this._countryService.getData().subscribe(
      (data:Array<Country>)=> {
        this.countries=[];
        data.forEach((c)=>{
          this.countries.push({
            name:c.name,
            capital:c.capital,
            region:c.region,
            flag:c.flag,
          });
        });
        console.log(JSON.stringify(this.countries))
      },
      (error) => {
        console.log(error);
      }
    );
  }
  SearchByName(searchString :string) {
    this._countryService.getByName(searchString).subscribe(
      (data:Array<Country>)=> {
        this.countries=[];
        data.forEach((c)=>{
          this.countries.push({
            name:c.name,
            capital:c.capital,
            region:c.region,
            flag:c.flag,
          });
        });
        console.log(JSON.stringify(this.countries))
      },
      (error) => {
        console.log(error);
      }
    );
  }
  search(searchString :string) {   
    console.log(searchString);
    if(isNullOrUndefined(searchString)){
      this.getAll();
    }
  }

}
