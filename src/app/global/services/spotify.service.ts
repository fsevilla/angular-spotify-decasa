import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQA7Ii6nwQBUyQRUCqp-akQR-3CDjmY9i955ukLZ-DUg_2pf90BG0f3OWd46_5YnvQIpwGLznowU7MvaH9EWzXWY0tOJ8rn8MY0cpq2WMBZkL2SBIOgLnEj-82tZUVc65sMPvb-HnfVFxy8jWB9aLkmWdOlGSYvt7UIRIFVotvMGh86h4Mz4ZIx6wbNyUAJCoKFnag';

  constructor(
  	private httpClient: HttpClient
  ) { }

  searchArtists(name:string):Promise<any> {
  	let url = `${environment.spotifyApi}search`;

  	let headers = new HttpHeaders()
  		.set('Accept', 'application/json')
  		.set('Content-Type', 'application/json')
  		.set('Authorization', `Bearer ${this.token}`);

  	let params = new HttpParams()
  		.set('type', 'artist')
  		.set('q', name);

  	return this.httpClient.get(url, {
  			headers,
  			params
  		}).toPromise();
  }

  getArtist(artistId:string):Promise<any> {
    let url = `${environment.spotifyApi}artists/${artistId}`;

    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);

    return this.httpClient.get(url, {
      headers
    }).toPromise();
  }
}

/*

{
	headers: headers,
	params: params
	other: something
}

Si el valor lleva el mismo nombre de la propiedad:
{
	headers,
	params,
	other: something
}
*/