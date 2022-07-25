import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  map: any;
  @ViewChild('mapElement') mapElement: any;
  constructor() {}

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    const ctaLayer = new google.maps.KmlLayer({
      url: 'https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml',
      // url: 'https://heremaps.github.io/maps-api-for-javascript-examples/display-kml-on-map/data/us-states.kml',
      map: this.map,
    });
  }
  ngOnInit(): void {}
}
