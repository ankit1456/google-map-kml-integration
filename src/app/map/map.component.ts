import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  url: string = '';
  map: any;
  address:Address
  @ViewChild('mapElement') mapElement: any;

  constructor() {}

  submit(f: NgForm) {
    this.url = f.controls['url'].value;
    this.ngAfterViewInit();
    f.reset();
   
  }
  handleAddressChange(address:Address){
    this.address=address
  }
  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      suppressInfoWindows: true,
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
 
    const ctaLayer = new google.maps.KmlLayer({
      url: this.url,
      // url: 'https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml',
      // url: 'https://heremaps.github.io/maps-api-for-javascript-examples/display-kml-on-map/data/us-states.kml',
      //url:"https://raw.githubusercontent.com/googlearchive/kml-samples/gh-pages/kml/Placemark/placemark.kml",
      // url:"http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss"
      map: this.map,
    });

    
  }
  ngOnInit(): void {}
}
