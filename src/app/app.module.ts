import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { NoAplicaPipe } from './global/pipes/no-aplica.pipe';
import { ProgressBarComponent } from './global/components/progress-bar/progress-bar.component';
import { ProgressBarStatusDirective } from './global/directives/progress-bar-status.directive';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    NotFoundComponent,
    ArtistsComponent,
    ArtistDetailsComponent,
    NoAplicaPipe,
    ProgressBarComponent,
    ProgressBarStatusDirective,
    ConfirmationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
