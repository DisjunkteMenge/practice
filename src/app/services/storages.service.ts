import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: number;
  title: string;
  value: string;
  modified: number;
}











@Injectable({
  providedIn: 'root'
})
export class StoragesService {

  constructor() { }
}
