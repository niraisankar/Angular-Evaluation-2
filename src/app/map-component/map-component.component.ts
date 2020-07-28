import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 20.5937;
  lng = 78.9629;
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 4,
      center: [this.lng, this.lat]
    });
    new mapboxgl.Marker()
    .setLngLat([80.20929129999999, 13.0569951])
    .addTo(this.map);
    new mapboxgl.Marker()
    .setLngLat([77.350048, 12.953847])
    .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
