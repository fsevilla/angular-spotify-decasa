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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    NotFoundComponent,
    ArtistsComponent,
    ArtistDetailsComponent,
    NoAplicaPipe
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
