import { Injectable } from '@angular/core';

/* Der Service baut einen Friend-Datensatz und stellt sie zur Verfügung.  
 Die Daten könnten auch von einer API bezogen und zu Verfügung gestellt werden
*/

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  names = [];
  texts = [];
  images = [];

  constructor() { }

  addFriend(name, text, image) {
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);

  }
}
