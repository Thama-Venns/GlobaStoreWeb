import { Component, OnInit } from '@angular/core';
import { LocalStorageKeys } from 'src/app/core/constants/localStoragetKeys';
import { DataManagementService } from 'src/app/core/services/data-management.service';
import { GlobalAPiService } from 'src/app/core/services/global-api-service';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKey: string = "";
  results: any;
  active: boolean = false;
  constructor(
    private globalStoreAPi: GlobalAPiService,
    private dataManager: DataManagementService) { }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.searchKey += event.key;
    this.globalStoreAPi.getSearchResults(this.searchKey).subscribe((x: any) => {
      this.results = x;
      console.log(this.results);
    })

    debugger
    if(this.searchKey !== "") {
      setTimeout(() => {
        debugger
        let storageKeys = this.dataManager.getLocalStorageData(LocalStorageKeys.SEARCH_HISTORY)?.split(",")
        let searchKeys =  !storageKeys ? "" : storageKeys;

        if(searchKeys.length > 5) {
          searchKeys.slice(-1);
        }

        searchKeys += ','+ this.searchKey;

        this.dataManager.setLocalStorageData(LocalStorageKeys.SEARCH_HISTORY, searchKeys);
      }, 5000);
    }
  }

  startSerach() {
    if(this.active) {
      this.active = false;
      document.getElementById("SearchResults").style.display = "none";
    } else {
      this.active = true;
      document.getElementById("SearchResults").style.display = "block";
    }  
  }

}
