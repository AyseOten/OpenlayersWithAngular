import { Component, OnInit, Inject } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from '../modal/modal.component';
import { Output, EventEmitter } from '@angular/core';
import {Info} from '../info';
import {ModalcontrolService} from '../modalcontrol.service';
import {Coordinates} from '../coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  map;
  modal;
  locationName:string;
  adress:string;
  telephone:string;

  trueOrFalse:boolean;

  Coordinate:Coordinates = {coordinate:null, trueOrFalse:null};

  @Output() newItemEvent = new EventEmitter<Coordinates>();
  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'myMap',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([7.0785, 51.4614]),
        zoom: 5
      })
    });
  }

  getCoord(event: any){
    var coordinate = this.map.getEventCoordinate(event);
    console.log(coordinate);
    //this.Coordinate.push({'coordinate':coordinate,'trueOrFalse': true});

    this.Coordinate.coordinate = coordinate;
    this.Coordinate.trueOrFalse = true;
    
    console.log("coordinate and true",this.Coordinate);
    this.newItemEvent.emit(this.Coordinate);
 }


}
