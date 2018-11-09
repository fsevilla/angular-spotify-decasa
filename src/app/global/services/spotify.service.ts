import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQBo4ZSTHLg8W9x1396VqE7zxc9A1slT-cIlyWrqCEYwXIcy8WL8dBMbi-hei73dE0Uqrd6CjqjV1hiFx04obqmpYuzgG1Y5WlsUNZAbl7Ot0AGSvptILM6l-bdwOsNgyjNyafu-zdIU6xskEKtwUYdUBVoR9swswz-IfxTfWjpydGW95T9ImEPrQaDKUCPp3NaRzA';

  constructor(
  	private httpClient: HttpClient
  ) { }

  private getHeaders() {
    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);

    return headers;
  }

  searchArtists(name:string):Promise<any> {
  	let url = `${environment.spotifyApi}search`;

  	let headers = this.getHeaders();

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

    let headers = this.getHeaders();

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