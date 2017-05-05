import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './components/app.component';
import { YoutubeRequest } from './models/youtube-request';
import { Args } from "./models/args";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ YoutubeRequest, Args ]
})
export class AppModule { }
