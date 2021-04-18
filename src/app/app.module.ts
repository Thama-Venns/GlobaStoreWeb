import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './lib/button/button.component';
import { SocialComponent } from './lib/social/social.component';
import { HomeComponent } from './components/home/home.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from './lib/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MapComponent } from './components/map/map.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PromotionsComponent } from './lib/promotions/promotions.component';
import { MatMenuModule} from '@angular/material/menu';
import { ButtonFullComponent } from './lib/button-full/button-full.component';
import { MerchantsComponent } from './components/merchants/merchants.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MerchantsDetailsComponent } from './components/merchants-details/merchants-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SocialComponent,
    HomeComponent,
    AccountsComponent,
    MainNavComponent,
    SearchComponent,
    MapComponent,
    PromotionsComponent,
    ButtonFullComponent,
    MerchantsComponent,
    PageNotFoundComponent,
    MerchantsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:5001/v1'],
          sendAccessToken: true
      }
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
