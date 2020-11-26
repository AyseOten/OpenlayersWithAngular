import { Component } from '@angular/core';
import {ModalcontrolService} from '../app/modalcontrol.service';
import {Coordinates} from '../app/coordinates';
import {Info} from '../app/info';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenlayersWithAngular';

  trueOrFalse = false;

  //items = [];
  infos = [];

  addItem(newItem: Coordinates) {
    this.infos.push(newItem.coordinate);
    this.trueOrFalse = newItem.trueOrFalse;
    //console.log('log' + this.items);
  }

  addInfos(newI: Info) {
    this.infos.push(newI.locationName);
    this.infos.push(newI.adress);
    this.infos.push(newI.telephone);

    this.trueOrFalse = newI.trueOrFalse;
  }

  closeModal (){
    this.trueOrFalse = false;
  }
}
