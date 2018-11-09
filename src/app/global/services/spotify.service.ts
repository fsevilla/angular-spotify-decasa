import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQA-nlTP-3k9wRsh6yLUmgOelwAMQpeHsyrDcddVNrC2dIp4sMXt18xa2qR_LuwhJNTyLbt7n0eFhDSeJqLrnR9PKMeWav5FLD9o-QoUsNSSMZo_FDUml6kV4zlbxsZW2TA8bj00ZfTe01KuigRXFv-DNKwllRQtuhxi2cLS4UgunYcO_JaS_SG2Sti2Gf5CJR5rlg';

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

  getToken(code:string):Promise<any> {

    const { spotifyAccountUrl, clientID, clientSecret, redirectUri } = environment;

    const url = `${spotifyAccountUrl}api/token`;

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const params = new HttpParams()
      .set('code', code)
      .set('grant_type', 'authorization_code')
      .set('redirect_uri', redirectUri)
      .set('client_id', clientID)
      .set('client_secret', clientSecret);

    return this.httpClient.post(url, params.toString(), {
      headers
    }).toPromise();

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