import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalAPiService } from 'src/app/core/services/global-api-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: any;

  constructor(
    private globalStoreApi: GlobalAPiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCountries()
  }

  getCountries() {
    this.spinner.show();
    this.globalStoreApi.getCountries().subscribe((x:any) => {
      this.countries = x;
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    })
  }
}
