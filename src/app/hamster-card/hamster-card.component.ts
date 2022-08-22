import { Component, Input, OnInit } from '@angular/core';
/*
* Komponente zur Darstellung einer Hamster-Card
*/
@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss']
})
export class HamsterCardComponent implements OnInit {
  // Über ein Property-Binding über den Dekorator Input werden von der App-Component Text und Bild übergeben.
  @Input() text: string = '';
  @Input() img: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
