import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {MapModule} from './map/map.module';
import {RouterModule} from '@angular/router';
import {AuthenticationModule} from './authentication/authentication.module';
import {UserModule} from './user/user.module';
import {LocationModule} from './location/location.module';
import {ObjectsModule} from './object/object.module';
import {LocationTypeModule} from './location-type/location-type.module';

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
        ObjectsModule,
        LocationTypeModule
    ],
    providers: [],
    exports: [
        ContentComponent,
    ],
})
export class ContentModule {
}
