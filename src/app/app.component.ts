import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  postTexte=[

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



  buttonClicked(){
    alert('hallo wie geht es dir?')
  }
}
