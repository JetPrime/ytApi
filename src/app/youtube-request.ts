import { YoutubeArgs } from "./youtube-args";

export class YoutubeRequest {
    part : string;
    args: YoutubeArgs[];
    item: string;
    private key = "AIzaSyBUE8mQYmZ_LKrizCcfBNJb3bsi0nviVTY";
    private url = "https://www.googleapis.com/youtube/v3/";

    constructor(){}

    createRequest(pYoutubeRequest: YoutubeRequest ): string {
        let request = this.url;
        request += pYoutubeRequest.item;
        request += "?key=" + this.key;
        request += "&part=" + pYoutubeRequest.part;
        pYoutubeRequest.args.forEach(element => {
            request += "&" + element.name;
            request += "=" + element.value;
        });
        return request;
    }
}