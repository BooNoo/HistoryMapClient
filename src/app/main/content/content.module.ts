import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {MapModule} from './map/map.module';
import {RouterModule} from '@angular/router';
import {AuthenticationModule} from './authentication/authentication.module';
import {UserModule} from './user/user.module';
import {LocationModule} from './location/location.module';
import {MapObjectsModule} from './map-objects/map-objects.module';

@NgModule({
    declarations: [
        ContentComponent,
    ],
    imports: [
        RouterModule,
        AuthenticationModule,
        MapModule,
        UserModule,
        LocationModule,
        MapObjectsModule,
    ],
    providers: [],
    exports: [
        ContentComponent,
    ],
})
export class ContentModule {
}
