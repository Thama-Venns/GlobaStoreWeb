import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalAPiService {

  constructor(private _http: HttpClient) { }

  getCountries() {

    const httpOptions = {
      params: new HttpParams()
        .set('$Count', "true"),
      headers: new HttpHeaders({
        // 'Authorization': `Bearer ${}`
      })
    };

    return this._http.get(environment.globalStoreCountries, httpOptions);
  }
}
