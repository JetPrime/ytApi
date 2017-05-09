import { Component, Input, OnInit } from '@angular/core';

import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'cmp-channel',
  templateUrl:'./channel.component.html',
  styleUrls: [ '../../../styles/app.component.css' ]
})

export class ChannelComponent implements OnInit {

  @Input()
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

}