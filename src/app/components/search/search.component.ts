import { Component, EventEmitter, Output } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'cmp-search',
  templateUrl:'./search.component.html',
  styleUrls: [ '../../../styles/app.component.css' ]    
})

export class SearchComponent {
    
    @Output()
    onRequest = new EventEmitter<string>();
    channelRequest: string;

    constructor( private ytService: YoutubeService){}

    onEnter(pChannelRequest: string): void {
        this.onRequest.emit(pChannelRequest);
    };
}