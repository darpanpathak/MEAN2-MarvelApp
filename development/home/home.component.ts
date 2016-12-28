import { Component } from '@angular/core';
import { SitemenuComponent } from '../sitemenu/sitemenu.component';
import { ProfileServices } from '../services/profile.service';
import { VideoPlayerTestComponent } from '../videoplayer/videoplayertest.component';

@Component({
    selector: 'home',
    providers: [SitemenuComponent, VideoPlayerTestComponent],
    moduleId: module.id,
    templateUrl: '../../partials/home.component.html'
})
export class HomeComponent {
    profilelist:any[];

    constructor(private profileservice: ProfileServices) { }

    ngOnInit() {
        this.profileservice.getProfileList().subscribe(profiles => {
            this.profilelist = profiles;
        });
    }
}