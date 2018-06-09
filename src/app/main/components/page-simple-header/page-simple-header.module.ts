import {PageSimpleHeaderComponent} from './page-simple-header.component';
import {MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
    declarations: [PageSimpleHeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatIconModule
    ],
    exports: [
        PageSimpleHeaderComponent,
    ],
})
export class PageSimpleHeaderModule {
}
