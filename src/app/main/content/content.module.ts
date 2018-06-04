import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {MapModule} from './map/map.module';
import {RouterModule} from '@angular/router';
import {AuthenticationModule} from './authentication/authentication.module';
import {UserModule} from './user/user.module';
import {LocationModule} from './location/location.module';

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
    ],
    providers: [],
    exports: [
        ContentComponent,
    ],
})
export class ContentModule {
}
