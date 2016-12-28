"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require('videogular2/core');
var controls_1 = require('videogular2/controls');
var overlay_play_1 = require('videogular2/overlay-play');
var VideoPlayerTestComponent = (function () {
    function VideoPlayerTestComponent() {
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
    VideoPlayerTestComponent = __decorate([
        core_1.Component({
            selector: 'videoplayertest',
            moduleId: module.id,
            providers: [core_2.VgCoreModule, controls_1.VgControlsModule, overlay_play_1.VgOverlayPlayModule],
            templateUrl: '../../partials/videoplayer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VideoPlayerTestComponent);
    return VideoPlayerTestComponent;
}());
exports.VideoPlayerTestComponent = VideoPlayerTestComponent;

//# sourceMappingURL=videoplayertest.component.js.map
