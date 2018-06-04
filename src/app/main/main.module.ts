import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { MainComponent } from './main.component';
import {
    MatAutocompleteModule,
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ContentModule} from './content/content.module';

@NgModule({
    imports: [
        RouterModule,
        ReactiveFormsModule,
        BrowserModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        ContentModule
    ],
    declarations: [MainComponent],
    providers: [],
    exports: [
        MainComponent,
    ],
    entryComponents: []
})

export class MainModule {
}
