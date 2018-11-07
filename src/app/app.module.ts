import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumsComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
