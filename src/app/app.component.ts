import { Component } from '@angular/core';

/*
* TypeScript Komponente, stellt die Texte und die Bilder in einem Array zur Verfügung
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "HamsterBook";

  postTexte = [

    'Hallo, mein Name ist Frederik. Ich bin hier um neue Freunde zu treffen .',
    'Hi...möchte hier neue Hamster kennenlernen !',
    'Bin neu hier und habe keinen Plan !',
    'Ich stehe voll auf Erdbeeren !'

  ];

  postImages = [

    'assets/img/hamster/bild1.jpg',
    'assets/img/hamster/bild2.jpg',
    'assets/img/hamster/bild3.jpg',
    'assets/img/hamster/bild4.jpg'
  ];

}
