import { Component, OnInit } from '@angular/core';
import {YoutubeService } from './youtube.service';
import { Channel } from './channel';

@Component({
  selector: 'my-app',
  template: `
  <div *ngIf="channel">
    <h1>{{channel.title}}</h1>
    <h2>{{channel.description}}</h2>
    <img src="{{channel.thumbnails.default.url}}"/>
  </div>
  `,
  providers: [ YoutubeService ]
})
export class AppComponent implements OnInit 
{ 
  channel : Channel;
  constructor( private ytService: YoutubeService){}
  ngOnInit(): void {
    this.getChannel();
  };
  getChannel(): void {
    this.ytService.getChannel().then(channel => this.channel = channel);
  }
}
