import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQAerArbc7p9fu-02cGvX6zN6OBjn6Zesq8b4UAfmY-EQU-8HXMgRapfDhU5ehRHGVpW3-VKNPg-xQtpaLOJdE86XPYVNo9ghZbEBb7vi-8tnp7V1UaP7u5_FptzH0IUOIBI69PXF9HcXAbYecutHBwLST_twDMo06V6qiX8_ql_5TDhH_TpDaVrbCvEQfCQl_cs9w';

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