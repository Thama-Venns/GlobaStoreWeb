import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: 'global-map',
      center: [-74.5, 40],
      zoom: 9,
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      }), "top-left");

      this.map.addControl(new mapboxgl.NavigationControl(), "top-left");
  }
}
