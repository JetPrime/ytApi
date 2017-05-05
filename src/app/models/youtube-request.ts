import { YoutubeArgs } from "./youtube-args";

export class YoutubeRequest {
    part : string[];
    args: YoutubeArgs[];
    item: string;
    private key = "AIzaSyBUE8mQYmZ_LKrizCcfBNJb3bsi0nviVTY";
    private url = "https://www.googleapis.com/youtube/v3/";

    constructor(){}

    getUrl(pYoutubeRequest: YoutubeRequest ): string {
        let request = this.url;
        request += pYoutubeRequest.item;
        request += "?key=" + this.key;
        request += "&part=";
        pYoutubeRequest.part.forEach(element => {
            request += element;
            if(pYoutubeRequest.part.indexOf(element) < pYoutubeRequest.part.length-1)
                request += ",";
        });
        if(pYoutubeRequest.args != undefined){
            pYoutubeRequest.args.forEach(element => {
                request += "&" + element.name;
                request += "=" + element.value;
            });
        }


        console.log(request);

        return request;
    }
}