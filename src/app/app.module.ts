import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputBase} from '@angular/material/input';

import { AppComponent } from './app.component';
import { AddProductComponent } from './component/add-product/add-product/add-product.component';
import { ProductListComponent } from './component/product-list/product-list/product-list.component';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { ColorPriceDirective } from './directives/color-price.directive';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { CountryComponent } from './Component/country/country.component';
import { CountryService } from "./services/country.service";
import { DetailCountryComponent } from './Component/detail-country/detail-country.component';
import { FormComponent } from './Component/material-example/form/form.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'country',      component: CountryComponent },
  { path: 'country/:country',  component: DetailCountryComponent },
  { path: 'form',      component: FormComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    ColorPipePipe,
    ColorPriceDirective,
    HomeComponent,
    AboutComponent,
    CountryComponent,
    DetailCountryComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputBase,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
