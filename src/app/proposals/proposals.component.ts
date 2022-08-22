import { Component, OnInit } from '@angular/core';

// Arrays mit Daten zu Freundesvorschlägen

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Soielt gerne', 'Hamsterrad-Freak'];
  images = ['assets/img/hamster/bild4.jpg', 'assets/img/hamster/bild3.jpg', 'assets/img/hamster/bild2.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
