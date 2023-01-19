import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';
import {MessagesComponent} from './components/messages/messages.component';
import { TempHeroComponent } from './components/temp-hero/temp-hero.component';
import { TempHeroDisplayComponent } from './components/temp-hero-display/temp-hero-display.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { TitleCasePipe } from './pipes/title-case.pipe';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        TempHeroComponent,
        TempHeroDisplayComponent,
        HighlightDirective,
        TitleCasePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
