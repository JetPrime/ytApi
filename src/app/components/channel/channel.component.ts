import { Component, Input } from '@angular/core';

import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'cmp-channel',
  templateUrl:'./channel.component.html',
  styleUrls: [ '../../../styles/app.component.css' ]
})

export class ChannelComponent {

  @Input()
  channelRequest: string;

  channel : YoutubeResponse;

  playlists: YoutubeResponse;
  playlist: YoutubeResponse;

  constructor( private ytService: YoutubeService){}

  ngOnChanges(): void {
    if(this.channelRequest)
      this.getChannel();
  };

  getChannel(): void {
    this.ytService.getChannel(this.channelRequest).then(
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