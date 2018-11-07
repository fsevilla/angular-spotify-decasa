import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes:Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'albums', component: AlbumsComponent },
	{ path: 'albums/:id', component: AlbumDetailsComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404', pathMatch: 'full' }
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
*/