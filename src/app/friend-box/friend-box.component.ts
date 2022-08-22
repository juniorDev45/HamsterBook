import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss']
})
export class FriendBoxComponent implements OnInit {


  // Über eine Konstuktor Dependency Injection befüllt der Service die Arrays und stellt sie der Komponente zur Verfügung.
  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }

}
