import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalAPiService {

  constructor(private _http: HttpClient) { }

  public getCountries() {

    const httpOptions = {
      params: new HttpParams()
        .set('$Count', "true"),
      headers: new HttpHeaders({
        // 'Authorization': `Bearer ${}`
      })
    };

    return this._http.get(environment.globalStoreCountries, httpOptions);
  }

  public getCountryById(id: Number) {
    return this._http.get(`${environment.globalStoreCountries + "/" + id}`);
  }

  public getStores() {

    const httpOptions = {
      params: new HttpParams()
                  .set('$Expand', 'Address')
                  .set('$Count', "true"),
      headers: new HttpHeaders({
        // 'Authorization': `Bearer ${}`
      })
    };

    return this._http.get(environment.globalStoreStores, httpOptions);
  }

  public getSearchResults(searckKey: string) {
    const httpOptions = {
      params: new HttpParams()
                  .set('searchKey', searckKey)
                  .set('$Count', "true"),
      headers: new HttpHeaders({
        // 'Authorization': `Bearer ${}`
      })
    };

    return this._http.get(environment.globalStoreSearch, httpOptions);
  }

  public getMerchants() {
    const httpOptions = {
      params: new HttpParams()
              .set('$Expand', 'addresses, stores')
              .set('$Count', "true")
    };

    return this._http.get(environment.globalStoreMerchants, httpOptions);
  }

  public getMerchantDetails(key: Number) {
    const httpOptions = {
      params: new HttpParams()
              .set('$Expand', 'addresses, stores')
              .set('$Count', "true")
    };

    return this._http.get(environment.globalStoreMerchants + "/" + key, httpOptions);
  }

}
