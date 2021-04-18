import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalAPiService } from 'src/app/core/services/global-api-service';
import { MapService } from 'src/app/core/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  activeId?: Number;
  stores: any;
  map: mapboxgl.Map;
  activePlace: any;

  constructor(private spinner: NgxSpinnerService,
              private globalApiService: GlobalAPiService,
              private mapService: MapService) { }

  ngOnInit(): void {
    this.spinner.show();

    this.map = this.mapService.InitializeMap();

      this.getStores()
  }

  getStores() {
    console.log("Before: " + this.stores);
    this.globalApiService.getStores().subscribe((response: any) => {
      this.stores = response.value;
      console.log("After: " + response);
      
      this.setMarkers()
      
      this.spinner.hide();
    }), err => {
      this.spinner.hide();
      console.log(err);
    };
    
  }

  /* add markers to map */
  setMarkers() {
    this.stores.forEach((element:any) => {

      var popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false }).setHTML(`<span id="placeID">${element.id}</span>`);

      // create a DOM element for the marker
      let el = document.createElement('div');
      el.className = 'marker';
      el.id = element.id;
      el.innerHTML =  `<span style="font-size: 25%; font-weight: bold">${ element.name }</span><br>` +
                      '<span class="material-icons" style="font-size: 1em;">night_shelter</span>';

      el.style.color = '#000';
      el.style.fontSize = '3em';
      el.style.backgroundSize = '100%';
      el.style.cursor = "pointer";

      el.addEventListener('click', (e:Event) => this.setActive(e));
      
      // add marker to map
      new mapboxgl.Marker(el)
          .setLngLat([element.address.longitude, element.address.latitude])
          .setPopup(popup)
          .addTo(this.map);
      });
  }

  public setActive($event):any {this.activePlace = this.stores.filter(x => x.id === parseInt($event.currentTarget.id))[0] }
  public goToSite(url) { window.open(url) }
}
