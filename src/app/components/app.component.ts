import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';
import { YoutubeResponse } from '../models/youtube-response';
import { YoutubeItem } from '../models/youtube-item';

@Component({
  selector: 'my-app',
  templateUrl:'../../views/app.component.html',
  providers: [ YoutubeService ]
})
export class AppComponent implements OnInit 
{ 
  channel : YoutubeResponse;
  playlists: YoutubeResponse;
  playlist: YoutubeResponse;
  constructor( private ytService: YoutubeService){}

  ngOnInit(): void {
    this.getChannel();
  };

  getChannel(): void {
    this.ytService.getChannel().then(
      channel => { 
        this.channel = channel[0];
        this.getPlaylists(channel[0].id);
      }
    );
  };

  getPlaylists(pId: string): void {
    this.ytService.getPlaylists(pId).then(
      playlists => this.playlists = playlists
    );
  };

  getPlaylist(pId: string): void {
    this.ytService.getPlaylist(pId).then(
      playlist => this.playlist = playlist
    );
  };

  onSelect(pId: string): void {
    this.getPlaylist(pId);
  }
}
