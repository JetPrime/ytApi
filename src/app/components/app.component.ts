import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';
import { YoutubeResponse } from '../models/youtube-response';
import { YoutubeItem } from '../models/youtube-item';

@Component({
  selector: 'my-app',
  templateUrl:'../../views/app.component.html',
  styleUrls: [ '../../styles/app.component.css' ],
  providers: [ YoutubeService ]
})
export class AppComponent implements OnInit 
{ 
  @ViewChild('videoPlayer') videoPlayerContainer: ElementRef;

  loadData(pHtml: string) {
      this.videoPlayerContainer.nativeElement.innerHTML = pHtml;
  }

  channel : YoutubeResponse;
  playlists: YoutubeResponse;
  playlist: YoutubeResponse;
  video: YoutubeResponse;
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

  getVideo(pId: string): void {
    this.ytService.getVideo(pId).then(
      video => {
        this.video = video;
        this.loadData(video[0].player.embedHtml);
      }
    );
  }

  onPlaylistSelect(pId: string): void {
    this.getPlaylist(pId);
  }

  onVideoSelect(pId: string): void {
    this.getVideo(pId);
  }
}
