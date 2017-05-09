import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { YoutubeResponse } from '../../models/youtube-response';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'cmp-playlists',
  templateUrl:'./playlists.component.html',
  styleUrls: [ '../../../styles/app.component.css' ]
})

export class PlaylistsComponent {
  
  @Input()
  playlists : YoutubeResponse;
  @Input()
  playlist : YoutubeResponse;

  video: YoutubeResponse;

  constructor( private ytService: YoutubeService){}

  onPlaylistSelect(pId: string): void {
    this.getPlaylist(pId);
  }
  
  getPlaylist(pId: string): void {
    this.ytService.getPlaylist(pId).then(
      playlist => this.playlist = playlist
    );
  };

  onVideoSelect(pId: string): void {
    this.getVideo(pId);
  };

  getVideo(pId: string): void {
    this.ytService.getVideo(pId).then(
      video => {
        this.video = video;
      }
    );
  };

}