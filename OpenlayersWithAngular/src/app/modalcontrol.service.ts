import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalcontrolService {
  trueOrFalse:boolean;
  constructor() { }

  modalOpen(){
    this.trueOrFalse = true;
  }
  modalClose(){
    this.trueOrFalse = false;
  }
}
