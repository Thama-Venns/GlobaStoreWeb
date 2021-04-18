import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalAPiService } from 'src/app/core/services/global-api-service';
import { Merchant } from 'src/app/models/Merchant';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {

  merchantSelected: Merchant;
  merchants: Merchant[];

  constructor(private globalApiService: GlobalAPiService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      debugger
      if(params['id']) {
        this.merchants.find(x => x.id === params['id']);
        return;
      }
    })

    this.getMerchants();
  }

  public getMerchants() {
    this.globalApiService.getMerchants().subscribe((x:any) => {
      this.merchants = x.value;
      console.log(this.merchants);
    })
  }

  public OnSelect(id: Number) {
    debugger
    this.merchantSelected = this.merchants.find(x => x.id === id);
  }

}
