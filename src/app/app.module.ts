import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamsterCardComponent } from './hamster-card/hamster-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendBoxComponent } from './friend-box/friend-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendService } from './friend.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamsterCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule

  ],

  // Wäre der Friend-Service nicht mit dem Dekorator Injectable aufgeführt, dann müsste hier der Name des Services hinterlegt werden.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
