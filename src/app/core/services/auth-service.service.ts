import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../config/AuthConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _oauthService: OAuthService) { 
    this._oauthService.configure(authConfig);
    this._oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    this._oauthService.initLoginFlow();
    this._oauthService.setupAutomaticSilentRefresh();
  }

  public logout() {
    this._oauthService.logOut();
  }

  public getToken():string {
    let x = this._oauthService.getAccessToken();
    
    return x;
  }

  public getClaims() {
    return this._oauthService.getIdentityClaims();
  }

  public isLoggein():boolean {
    return this._oauthService.hasValidIdToken();
  }
}
