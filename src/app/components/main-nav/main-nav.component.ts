import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { GlobalAPiService } from 'src/app/core/services/global-api-service';

@Component({
  selector: 'lib-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  claims: any;
  token:string;
  userCountry:any

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private globalApiService: GlobalAPiService) {}

  ngOnInit(): void {
    this.getToken();
    this.getUserClaims()
    this.getUserCountry(23);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getToken() {
    this.token = this.authService.getToken()
    console.log(this.token);
  }

  getUserClaims() {
    this.claims = this.authService.getClaims();
    console.log(this.claims);
    
  }

  isLoggein():boolean {
    return this.authService.isLoggein();
  }

  getUserCountry(id: Number) {
    this.globalApiService.getCountryById(id).subscribe((x: any) => { 
      this.userCountry = x;
      console.log(this.userCountry);
    });
  }

}
