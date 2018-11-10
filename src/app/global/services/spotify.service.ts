import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from './../../../environments/environment';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = '';

  constructor(
  	private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    let token = this.authService.getToken();
    this.token = `${token.token_type} ${token.access_token}`;
  }

  private getHeaders() {
    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `${this.token}`);

    return headers;
  }

  private handleError(error:any) {
    if(error.status === 401) {
      this.authService.clearToken();
      this.router.navigate(['/login']);
    }

    return throwError(error);
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
    })
    .pipe(catchError(this.handleError.bind(this)))
    .toPromise();

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
  		})
    .pipe(catchError(this.handleError.bind(this)))
    .toPromise();
  }

  getArtist(artistId:string):Promise<any> {
    let url = `${environment.spotifyApi}artists/${artistId}`;

    let headers = this.getHeaders();

    return this.httpClient.get(url, {
      headers
    })
    .pipe(catchError(this.handleError.bind(this)))
    .toPromise();
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