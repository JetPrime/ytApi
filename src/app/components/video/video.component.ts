import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';
import { YoutubeResponse } from '../../models/youtube-response';

@Component({
  selector: 'cmp-video',
  templateUrl:'./video.component.html',
  styleUrls: [ '../../../styles/app.component.css' ]
})

export class VideoComponent {

  @Input()
  video: YoutubeResponse;

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  constructor( private ytService: YoutubeService){}

  ngOnChanges(): void {
    if(this.video)
      this.loadData(this.video[0].player.embedHtml);
  };

  loadData(pHtml: string) {
      this.videoPlayer.nativeElement.innerHTML = pHtml;
  }

}