import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../Model/country';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  countryDetail:Country;
  constructor(private activatedRoute:ActivatedRoute) { 
    //console.log(this.activatedRoute.params['country']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.countryDetail= {
        capital:params['capital'],
        flag:params['flag'],
        name:params['name'],
        region:params['region'],
      }
    }
      
    );
  }

}
