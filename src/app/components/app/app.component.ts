import { Component, ViewChild, ElementRef } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeItem } from '../../models/youtube-item';

@Component({
  selector: 'app',
  templateUrl:'./app.component.html',
  styleUrls: [ '../../../styles/app.component.css' ],
  providers: [ YoutubeService ]
})
export class AppComponent
{ 
  channelRequest: string;

  onRequest(pChannelRequest: string) {
    this.channelRequest = pChannelRequest;
  }
}