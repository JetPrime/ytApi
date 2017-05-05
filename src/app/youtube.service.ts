import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Channel } from './channel';
import { YoutubeRequest } from './youtube-request';
import { YoutubeArgs } from './youtube-args';
import { Enums } from './enums';

@Injectable()
export class YoutubeService {
    constructor(
        private http: Http,
        private enums: Enums
    ) { }
    getChannel(): Promise<Channel> {

        let request = new YoutubeRequest();
        request.item = this.enums.ytItem.channels;
        request.part = this.enums.ytPart.snippet;
        request.args = [
            new YoutubeArgs(this.enums.ytArgs.forUsername, "CarbotAnimations")
        ];

        return this.http.get(request.createRequest(request))
                .toPromise()
                .then(response => response.json().items[0].snippet as Channel)
                .catch(this.handleError);
    };
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}