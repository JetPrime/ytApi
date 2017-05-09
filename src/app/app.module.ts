import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { YoutubeService } from './services/youtube.service';
import { YoutubeRequest } from './models/youtube-request';

import { AppComponent }  from './components/app/app.component';
import { ChannelComponent } from './components/channel/channel.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { VideoComponent } from './components/video/video.component';
import { SearchComponent } from './components/search/search.component';

import { Args } from "./models/args";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ChannelComponent, PlaylistsComponent, VideoComponent,
  SearchComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ YoutubeRequest, Args, YoutubeService ]
})
export class AppModule { }
