import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { YoutubeResponse } from './youtube-response';
import { YoutubeItem } from './youtube-item';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  providers: [ YoutubeService ]
})
export class AppComponent implements OnInit 
{ 
  channel : YoutubeResponse;
  playlists: YoutubeResponse;
  constructor( private ytService: YoutubeService){}
  ngOnInit(): void {
    this.getChannel();
  };
  getChannel(): void {
    this.ytService.getChannel().then(
      channel => { 
        this.channel = channel[0];
        this.getPlaylist(channel[0].id);
      }
    );
  }
  getPlaylist(pId: string): void {
    this.ytService.getPlaylists(pId).then(
      playlists => this.playlists = playlists
    );
  };
}
