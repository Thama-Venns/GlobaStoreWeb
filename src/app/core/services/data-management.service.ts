import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor() { }

  public setLocalStorageData(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  public getLocalStorageData(key: string): string {
    return localStorage.getItem(key);
  }
}
