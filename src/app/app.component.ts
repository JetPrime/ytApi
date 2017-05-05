import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { YoutubeResponse } from './youtube-response';
import { YoutubeItem } from './youtube-item';

@Component({
  selector: 'my-app',
  template: `
  <div *ngIf="channel">
    <img src="{{channel.snippet.thumbnails.default.url}}"/>
    <h1>{{channel.snippet.title}}</h1>
    <p>{{channel.id}}</p>
  </div>
  <div *ngIf="playlists">
    <div class="col-md-4" *ngFor="let playlist of playlists">
      <h4>{{playlist.snippet.title}}</h4>
    </div>
  </div>
  `,
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
