import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: mapboxgl.Map;

  constructor() { }

  InitializeMap() {
    mapboxgl.accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: 'global-map',
      center: [28.001957715344588, -26.093971211876955],
      zoom: 14,
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: false
      }), "top-left");

      this.map.addControl(new mapboxgl.NavigationControl(), "top-left");

      return this.map
  }

}
