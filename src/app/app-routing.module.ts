import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistsComponent } from './artists/artists.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './global/guards/auth.guard';

const routes:Routes = [
	{ path: '', component: SearchComponent, canActivate: [ AuthGuard ] },
	{ path: 'albums', component: AlbumsComponent },
	{ path: 'albums/:id', component: AlbumDetailsComponent },
	{ path: 'artists', component: ArtistsComponent, canActivate: [ AuthGuard ] },
	{ path: 'artists/:id', component: ArtistDetailsComponent, canActivate: [ AuthGuard ] },
	{ path: 'confirm', component: ConfirmationComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }

/*
	Ruta para cargar detalle de una cancion dentro de un album:
	E.g. albums/3/songs/5

	Se define asi:
	albums/:albumId/songs/:songId

	IMPORTANTE: Las rutas se cargan en orden. El primer match es el que se muestra. 
	E.g. albums/create, albums/:id   -> deben estar en ese orden
*/