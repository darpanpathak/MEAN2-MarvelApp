import {Component} from "@angular/core";
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';

@Component({
    selector: 'videoplayertest',
    moduleId: module.id,
    providers:[VgCoreModule,VgControlsModule,VgOverlayPlayModule],
    templateUrl: '../../partials/videoplayer.component.html'
})
export class VideoPlayerTestComponent {
    sources:Array<Object>;

    constructor() {
        this.sources = [
            {
                src: "../../../video1.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];
    }
}