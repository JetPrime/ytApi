import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { YoutubeService } from './services/youtube.service';
import { YoutubeRequest } from './models/youtube-request';

import { AppComponent }  from './components/app/app.component';
import { ChannelComponent } from './components/channel/channel.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { VideoComponent } from './components/video/video.component';

import { Args } from "./models/args";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ChannelComponent, PlaylistsComponent, VideoComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ YoutubeRequest, Args, YoutubeService ]
})
export class AppModule { }
